import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import { useHistory } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';



let uriRemote = "https://marloai.com/graphql"
let uriLocal = "http://localhost:4000/graphql"
const client = new ApolloClient({
  uri: uriRemote,
  cache: new InMemoryCache()
});


const loginUser = gql`
  mutation login($username: String!, $password: String) {
    login(username: $username, password: $password) {
      username
    }
  }
`;

function Login() {
    
    const [login, { data }] = useMutation(loginUser);
    
    const [userData, setUserData] = useState<any>(null);
    const history = useHistory();
    
    const authenticateUser = async (username: string, password: string) => {
        await login({ variables: { username: username, password: password } })
        
        
    }

    useEffect(() => {
        localStorage.clear()
        setUserData(data)
        
    }, [data])

    if(userData) {
        console.log(userData.login.username)
        localStorage.setItem('username', userData.login.username)
        history.push('/')
        setUserData(null)
        


    }

    
    const handleSearch = async(e: any) => {
        
        let username = e.target.username.value
        let password = e.target.password.value
        
        
        await authenticateUser(username, password)

        
        
    }
    
    
    return (
        <div className="container">
            
            <NavigationBar username={ localStorage.getItem('username') }></NavigationBar>
   
            <Form onSubmit = { event => { 
                event.preventDefault();
                handleSearch(event)
            } }>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control name="username" placeholder="Enter username: " />

                </Form.Group>
                <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control name="password" placeholder="Enter password: " />

                </Form.Group>
                
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                
            </Form>

            
        </div>
    )
}

export default Login
