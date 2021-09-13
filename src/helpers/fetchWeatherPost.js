import validApiDaily from './validApiDaily'
import validApiHour from './validApiHour'

const  fetchWeatherPost = async (url, outputIllation) =>{
    const responseJson = await fetch(url)
    const response = await responseJson.json()
    if(outputIllation) return validApiDaily(response)
    else return validApiHour(response)
}

export default fetchWeatherPost