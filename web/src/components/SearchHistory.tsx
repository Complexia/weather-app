import React from 'react';
import '../stylesheets/searchHistory.css'

import getWeatherFromData from '../utils/getWeatherFromData'

let weatherData = {
    city: "",
    temperature: "",
    weatherState: "",
    weatherDescription: ""
}

let user = "Unknown"

let weatherDataArray: any[] = []

function SearchHistory(props: any) {
    
    
    

    if(props.searchData != 0) {
        
        
        weatherData = getWeatherFromData(props.searchData)
        let dataJSON = JSON.stringify(weatherData)
        
        weatherDataArray.push(dataJSON)
        
    }

    
    
    
    
    return (
        <div className="jumbotron">
            <p>{ "Search History" }</p>
            <p>---------------------------</p>
            <div>{ weatherDataArray.map((result, index) => (
                
                <div className="row" key={index}>
                    <pre>{ user } searched for: </pre>
                    <div className="col-md-2">

                        <pre>{ JSON.parse(result).city }</pre>
                    </div>
                    <div className="col-md-2">

                        <pre>Temp: { JSON.parse(result).temperature }</pre>
                    </div>
                    <div className="col-md-2">

                        <pre>Weather: { JSON.parse(result).weatherState }</pre>
                    </div>
                    <div className="col-md-2">

                        <pre>{ JSON.parse(result).weatherDescription }</pre>
                    </div>
                    
                    
                </div>
                
                
                
                
            )) }</div>
            
        </div>
        
    )
}

export default SearchHistory