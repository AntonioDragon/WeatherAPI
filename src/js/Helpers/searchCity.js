import cityList from '../Data/cityList.json'
import transformCity from './transformCity'

const searchCity = (city) =>{
  const {cityTranscript, cityTranscriptAlternative} = transformCity(city)
  const cityObj = cityList.location.find((value) => {
    if (value.name == city)
      return true
    if (value.name == cityTranscript)
      return true
    if (value.name == cityTranscriptAlternative)
      return true
    return false
  })
  return cityObj
}

export default searchCity
