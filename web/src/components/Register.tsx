import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'



import NavigationBar from './NavigationBar';
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';



let uriLocal = "http://localhost:4000"
const client = new ApolloClient({
  uri: uriLocal,
  cache: new InMemoryCache()
});


const registerUser = gql`
  mutation register($username: String!, $password: String) {
    register(username: $username, password: $password) {
      username
    }
  }
`;

function Register() {
    
    const [register, { data }] = useMutation(registerUser);
    
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);
    
    const addUser = async (username: string, password: string) => {
        await register({ variables: { username: username, password: password } })
        
        
    }

    useEffect(() => {
        localStorage.clear()
        setUserData(data)
    }, [data])

    if(userData) {
        console.log(userData.register.username)
        localStorage.setItem('username', userData.register.username)
        setUserData(null)
        


    }

    
    const handleSearch = async(e: any) => {
        
        let username = e.target.username.value
        let password = e.target.password.value
        
        
        await addUser(username, password)


        
    }
    
    
    return (
        <div className="container">
            
            <NavigationBar></NavigationBar>
   
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
                    Create account
                </Button>
            </Form>

            
        </div>
    )
}

export default Register
