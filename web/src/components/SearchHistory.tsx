import React, { useEffect, useState } from 'react';
import '../stylesheets/searchHistory.css'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import getWeatherFromData from '../utils/getWeatherFromData'


let uriRemote = "http://18.216.99.246:8080/graphql"
let uriLocal = "http://localhost:4000/graphql"
const client = new ApolloClient({
  uri: uriRemote,
  cache: new InMemoryCache()
});


const getPosts = gql`
  query getAllPosts {
    getAllPosts {
      city
      temperature
      weather
      description
    }
  }
`;


let weatherData = {
    city: "",
    temperature: "",
    weatherState: "",
    weatherDescription: ""
}

let user = "Unknown"

let weatherDataArray: any[] = []

function SearchHistory(props: any) {
    
    const { loading, error, data } = useQuery(getPosts);
    const [searches, setSearches] = useState<any>(null);
    
    
    

    useEffect(() => {
        
        setSearches(data)
        let dataJSON = JSON.stringify(searches)
        
        
        
    }, [data])

    if(searches) {
        
        weatherDataArray = []
        for(let i=0; i<searches.getAllPosts.length; i++) {
            let weatherInter = {
                city: searches.getAllPosts[i].city,
                temperature: searches.getAllPosts[i].temperature,
                weatherState: searches.getAllPosts[i].weather,
                weatherDescription: searches.getAllPosts[i].description
            }
            
            let jsonWeather = JSON.stringify(weatherInter)
            
            weatherDataArray.push(jsonWeather)
        }
        
        
    }

    

    // if(props.searchData != 0) {
        
        
    //     weatherData = getWeatherFromData(props.searchData)
    //     let dataJSON = JSON.stringify(weatherData)
    //     console.log(dataJSON)
    //     weatherDataArray.push(dataJSON)
        
    // }

    //console.log(weatherDataArray[0])
    
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