import React, { useCallback, useEffect } from 'react'
import {CircularProgress, IconButton, makeStyles, Paper} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import NavBar from './NavBar'
import BlockCards from './BlockCards'
import ListWeather from './List'
import BlockFavorites from './BlockFavorites'
import BlockRadio from './BlockRadio'
import {useDispatch, useSelector} from 'react-redux'
import DrawerFavorite from './DrawerFavorite'
import { addFavoriteCity, deleteFavoriteCity, loadFavoriteCities, openCityFavorite, openCityNotFavorite } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    margin: 30,
  },
  wetherInfoDays: {
    padding: 10,
  },
  errorOutput: {
    color: 'red',
  },
  loading: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  blockFavorites: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))


const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const city = useSelector(state => state.weather.weather.city)
  const {alert, loading} = useSelector(state => state.app)
  const {cityOpenFavorite, favorites} = useSelector(state => state.favorites)

  
  useEffect(() => {
    if(sessionStorage.hasOwnProperty('ArrayFavorite')){
      dispatch(loadFavoriteCities(JSON.parse(sessionStorage.getItem('ArrayFavorite'))))
    }
  }, [dispatch])


  const favoriteToggleClick = useCallback(
    () => {
      if (cityOpenFavorite) {
        dispatch(openCityNotFavorite())
        dispatch(deleteFavoriteCity(favorites, city))
      } else {
        dispatch(openCityFavorite())
        dispatch(addFavoriteCity(favorites, city))
      }
    },
    [dispatch, cityOpenFavorite, favorites, city],
  )

  return (
    <>
      <DrawerFavorite/>
      <NavBar/>
      {alert === 'Missing' ? (
        (loading) ? <CircularProgress className={classes.loading}/> :
        (city !== 'Missing') && (
          <>
            <div className={classes.title}>
              <h1>{city}</h1>
              <IconButton
                edge="start"
                className={classes.menuIcon}
                color="inherit"
                aria-label="open drawer"
                onClick={favoriteToggleClick}
              >
                {cityOpenFavorite ? <StarIcon/> : <StarBorderIcon/>}
              </IconButton>
            </div>
            <BlockRadio/>
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
         <p> Please try to double-check the entered city or try again later</p>
         <p>{alert}</p>
         </div>
        
      )}
      <div className={classes.blockFavorites}>
        <h2>Favorites city</h2>
        <BlockFavorites  />
      </div>
    </>
  )
}

export default App
