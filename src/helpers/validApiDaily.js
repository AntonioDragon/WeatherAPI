import daysWeekCheck from "./daysWeekCheck"

const validApiDaily = async (city) =>{
  const urlkey = process.env.REACT_APP_WEATHER_KEY
  const daysArr = daysWeekCheck()
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${urlkey}&q=${city}&cnt=7&units=metric`)
    .then((value) => {
      return value.json()
    })
  
  const {
    list, 
    city: {
      coord: {
        lat,
        lon
      }, 
    }, 
  } = res

  return ({
    coord: {
      lat,
      lon,
    },
    daily: list.map((item, index)=>{
      const {
        main: {
          temp_min,
          temp_max,
        },
        wind: {
          speed
        },
        pop,
        weather: [
          {
            id: weatherId,
          },
        ],
      } = item

      return {
        temp: {
          min: temp_min,
          max: temp_max,
        },
        wind_speed: speed,
        pop,
        weatherId,
        dayWeek: daysArr[index]
      }
    })

  })
}

export default validApiDaily
