import React, {useCallback} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import { makeStyles,} from '@material-ui/core/styles'
import {CircularProgress, IconButton, Paper} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteCity, deleteFavoriteCity, openCityFavorite, openCityNotFavorite } from '../redux/actions'
import ListWeather from './List'
import BlockCards from './BlockCards'
import BlockRadio from './BlockRadio'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    marginLeft: 30,
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 10,
    },
  },
  weatherBlock:{
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 250,
    },
  },
  loading: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
}))

const AppContent = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.app)
  const city = useSelector(state => state.weather.weather.city)
  const {cityOpenFavorite, favorites} = useSelector(state => state.favorites)

  const favoriteToggleClick = useCallback(
       () => {
         if (cityOpenFavorite) {
           dispatch(openCityNotFavorite())
           dispatch(deleteFavoriteCity(city, favorites))
           
         } else {
           dispatch(openCityFavorite())
           dispatch(addFavoriteCity(city))
         }
       },
       [cityOpenFavorite, city, favorites],
     )

  return (
    <div className={classes.weatherBlock}>
    { 
        (loading) ? <CircularProgress className={classes.loading}/> :
        (city !== 'Missing') && (
            <>
            <div className={classes.title}>
                <h1>{city}</h1>
                <IconButton
                    edge='start'
                    className={classes.menuIcon}
                    color='inherit'
                    aria-label='open drawer'
                    onClick={favoriteToggleClick}
                >
                {cityOpenFavorite ? <StarIcon/> : <StarBorderIcon/>}
                </IconButton>
            </div>
            <BlockRadio/>
            <Paper elevation={3}>
                <Paper elevation={3}>
                <ListWeather />
                </Paper>
                <BlockCards />
            </Paper>
            </>
        )}
    </div>
  )
}

export default AppContent
