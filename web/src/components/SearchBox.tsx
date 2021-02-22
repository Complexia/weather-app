import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import fetchData from '../utils/fetchData'
import ResultBox from './ResultBox';
import SearchHistory from './SearchHistory';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

let uriRemote = "https://marloai.com/graphql"
let uriLocal = "http://localhost:4000/graphql"
const client = new ApolloClient({
  uri: uriRemote,
  cache: new InMemoryCache()
});

const save_post = gql`
  mutation savePost($username: String!, $city: String!, $temperature: String!, $weather: String!, $description: String!) {
    savePost(username: $username, city: $city, temperature: $temperature, weather: $weather, description: $description) 
      
    
  }
`;


interface weatherInfo {
    city: string,
    temperature: string,
    weatherState: string,
    weatherDescription: string
}




let searchDataArray: any = []

function SearchBox() {
    
    const [saveSearch, { data }] = useMutation(save_post);
    const [datas, setData] = useState<any>(0)
    
    const saveSearchI = async (username: string, city: string, temperature: string, weather: string, description: string) => {
        await saveSearch({ variables: { username: username, city: city, temperature: temperature, weather: weather, description: description } })
        
        
    }

    const handleSearch = async(e: any) => {
        let city = e.target.city.value
        let apiKey = "37311390ce96a5fd5be21566dfa991d7"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        await fetchData(url)
                 .then(datas => {
                     setData(datas)
                     searchDataArray.push(JSON.stringify(datas))
                     console.log(datas)
                     let username = "Unknown"
                    //  let username = localStorage.getItem('username')
                    //  if(!username) {
                    //      username = "Unknown"
                    //  }
                     let city = datas.data.name
                     let temperature = datas.data.main.temp
                     let weather = datas.data.weather[0].main
                     let description = datas.data.weather[0].description
                     console.log(username, city, temperature.toString(), weather, description)
                     saveSearchI(username, city, temperature.toString(), weather, description)
                     
                 })
                 .catch(err => {
                     console.log(err)
                 })

        
    }
    
    
    return (
        <div>
            
   
            <Form onSubmit = { event => { 
                event.preventDefault();
                handleSearch(event)
            } }>
                <Form.Group>
                    <Form.Label>City: </Form.Label>
                    <Form.Control name="city" placeholder="Enter city: " />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

            <ResultBox weatherData={ JSON.stringify(datas) }></ResultBox>

            <SearchHistory searchData={ JSON.stringify(datas) }></SearchHistory> 
        </div>
    )
}

export default SearchBox
