import 'normalize.css'
import '../scss/style.scss'

import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'
import NavBar from './Components/NavBar'
import BlockCards from './Components/BlockCards'
import ListWeather from './Components/List'
import {makeStyles, Paper} from '@material-ui/core'
import BlockFavorites from './Components/BlockFavorites'
import searchCity from './Helpers/searchCity'
import userApiPull from './Helpers/axiosUsersAPI'
import ContextApp from './Context/ContextApp'
import timeDayCheck from './Helpers/timeDayCheck'
import daysWeekCheck from './Helpers/daysWeekCheck'
import BlockRadio from './Components/BlockRadio'
import iconsWeather from './Helpers/iconsWeather'
import transformApi from './Helpers/transformApi'
import validApi from './Helpers/validApi'

const useStyles = makeStyles(() => ({
  title: {
    margin: 30,
    fontSize: 35,
  },
  wetherInfoDays: {
    padding: 10,
  },
  errorOutput: {
    color: 'red',
  },
}))

const App = () => {
  const classes = useStyles()
  const [weather, setWeather] = useState('Missing')
  const [city, setCity] = useState('Missing')
  const [daysArray, setDaysArray] = useState('Missing')
  const [hourseArray, setHourseArray] = useState('Missing')
  const [error, setError] = useState('Missing')
  const [imagesArrayList, setImagesArrayList] = useState([])
  const [imagesArrayCard, setImagesArrayCard] = useState([])
  const [metric, setMetric] = useState(true)

  const searchWeather = useCallback(
      (city) => {
        const coordCity = searchCity(city)
        if (coordCity) {
          setError('Missing')
          const {
            coord: {lat, lon},
          } = coordCity
          const urlWeather = `http://api.openweathermap.org/data/2.5/onecall?&appid=2e520548e365d2804c02e48c9cae65a0&lat=${lat}&lon=${lon}&units=metric&lang=ru`
          setDaysArray(daysWeekCheck())
          const hoursArr = timeDayCheck()
          setHourseArray(hoursArr)
          userApiPull(urlWeather)
              .then((value) => {
                validApi(value)
                const weatherTransform = transformApi(value)
                setWeather(weatherTransform)
                setImagesArrayCard(
                    iconsWeather(weatherTransform, true, hoursArr))
                setImagesArrayList(iconsWeather(weatherTransform, false))
                setError('Missing')
              })
              .catch((e) => {
                setError(e)
              })
          setCity(city)
        } else {
          setError({message: 'Not found your city'})
          setWeather('Missing')
        }
      },
      [city],
  )

  return (
    <ContextApp.Provider
      value={{
        weather,
        setWeather,
        daysArray,
        hourseArray,
        searchCity,
        searchWeather,
        metric,
        imagesArrayList,
        imagesArrayCard,
        setError,
        setDaysArray,
        setHourseArray,
        setWeather,
        setImagesArrayCard,
        setImagesArrayList,
        setCity,
      }}
    >
      <NavBar />
      {error == 'Missing' ? (
        weather != 'Missing' && (
          <>
            <h1 className={classes.title}>{city}</h1>
            <BlockRadio setMetric={setMetric} />
            <Paper className={classes.wetherInfoDays} elevation={3}>
              <Paper className={classes.wetherInfoTodayTime} elevation={3}>
                <ListWeather />
              </Paper>
              <BlockCards />
            </Paper>
          </>
        )
      ) : (
        <div>
          <p>Sorry, an error has occurred.</p>
          <p>{error.message}</p>
          <p>Please try to double-check the entered city or try again later</p>
        </div>
      )}
      <h2>Favorites city</h2>
      <BlockFavorites />
    </ContextApp.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))
