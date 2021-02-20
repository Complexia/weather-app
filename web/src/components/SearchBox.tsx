import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'



import fetchData from '../utils/fetchData'
import ResultBox from './ResultBox';
import SearchHistory from './SearchHistory';
import getWeatherFromData from '../utils/getWeatherFromData';

interface weatherInfo {
    city: string,
    temperature: string,
    weatherState: string,
    weatherDescription: string
}

// let weatherData: weatherInfo = {
//     city: "",
//     temperature: "",
//     weatherState: "",
//     weatherDescription: ""
// }
// let weatherDatas: any = []
// const setWeatherInfo = (data:any) => {
//     weatherData.city = JSON.stringify(data.data.weather[0].main)
//     weatherData.temperature = JSON.stringify(data.data.weather[0].main)
//     weatherData.weatherState = JSON.stringify(data.data.weather[0].main)
//     weatherData.weatherDescription = JSON.stringify(data.data.weather[0].main)
//     weatherDatas.push(weatherData)
    
// }


let searchDataArray: any = []

function SearchBox() {
    
    
    const [data, setData] = useState<any>(0)
    
    
    const handleSearch = async(e: any) => {
        let city = e.target.city.value
        let apiKey = "37311390ce96a5fd5be21566dfa991d7"
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        await fetchData(url)
                 .then(data => {
                     setData(data)
                     searchDataArray.push(JSON.stringify(data))
                     
                     
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

            <ResultBox weatherData={ JSON.stringify(data) }></ResultBox>

            <SearchHistory searchData={ JSON.stringify(data) }></SearchHistory> 
        </div>
    )
}

export default SearchBox
