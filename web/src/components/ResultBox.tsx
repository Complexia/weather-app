import React, { useEffect, useState } from 'react';
import getWeatherFromData from '../utils/getWeatherFromData'

let weatherData = {
    city: "",
    temperature: "",
    weatherState: "",
    weatherDescription: ""
}



const setWeatherData = (city: string, weatherState: string, weatherDescription: string, temperature: string) => {
    
    weatherData.city = city
    weatherData.weatherState = weatherState
    weatherData.weatherDescription = weatherDescription
    weatherData.temperature = temperature
    //console.log("HEY", weatherData.temperature)
    
    
    
}

function ResultBox(props: any) {
    
    

    if(props.weatherData != 0 && props.weatherData != undefined) {
        
        
        weatherData = getWeatherFromData(props.weatherData)
        
        
            
        
    }
    
    

    return (

        <div className="jumbotron">

            <div className="row">
                
                <div className="col-md-6">
                    <pre>City: { weatherData.city }</pre>
                    <pre>Weather: { weatherData.weatherState }</pre>
                    <pre>Description: { weatherData.weatherDescription }</pre>
                    <pre>Temperature: { weatherData.temperature }</pre>

                    <p>---------------------</p>
                    
                </div>
                <div className="col-md-6">
                    Picture
                </div>
                
                
                
            </div>
        </div>
    )
}

export default ResultBox;