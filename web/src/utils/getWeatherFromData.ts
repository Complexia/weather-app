import React, { useEffect, useState } from 'react';


let weatherDataA = {
    city: "",
    temperature: "",
    weatherState: "",
    weatherDescription: ""
}



const getWeatherFromData = (propData: any) => {
    
    
    let data = JSON.parse(propData)
    weatherDataA.city = data.data.name
    weatherDataA.weatherState = data.data.weather[0].main
    weatherDataA.weatherDescription = data.data.weather[0].description
    weatherDataA.temperature = data.data.main.temp
    
    
    return weatherDataA

}

export default getWeatherFromData