import axios from 'axios';
const fetchWeatherData = async (url: string) : Promise<any> => {
    

    return axios.get(url)
        .then(response => {

            return response
        })
        
        .catch(err =>{
            
            console.log(err)           
        })
            
        
}
export default fetchWeatherData