import React, {useCallback, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import FormDialog from './FormDialog'
import {useDispatch, useSelector} from 'react-redux'
import {deleteFavoriteCity, fetchWeather, hideDrawer, openCityFavorite, openCityNotFavorite} from '../redux/actions'

const useStyles = makeStyles((theme) =>({
  root: {
      maxWidth: 200,
      marginRight: 10,
      marginTop: 5,
  },
  buttonFavorites: {
    width: 200,
    [theme.breakpoints.up('md')]: {
      fontSize: 8,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
      width: 120,
    },
  },
  iconCard: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const CardFavorites = (props) => {
  const classes = useStyles()
  const [openFormDialog, setOpenFormDialog] = useState(false)
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites)
  const city = useSelector(state => state.weather.weather.city)
  const {value, id} = props

  const favoriteOpenAddCity = useCallback(
      () => {
        dispatch(hideDrawer())
        dispatch(fetchWeather(value, favorites))
      },
      [value, dispatch, favorites],
  )

  const favoriteDeleteCity = useCallback(
      () => {
        dispatch(deleteFavoriteCity(value))
        if(city !== 'Missing' && favorites.find((value)=> value === city))
         dispatch(openCityFavorite())
        else dispatch(openCityNotFavorite())
      },
      [value, city, favorites],
  )

  return (
    <Card className={classes.root}>
      <FormDialog
        open={openFormDialog}
        idCardFavorite={id}
        setOpenFormDialog={setOpenFormDialog}
      />
      <CardActions>
        <Button
          onClick={favoriteOpenAddCity}
          className={classes.buttonFavorites}
          variant='contained'
          color='primary'
        >
          {value}
        </Button>
        <CreateIcon onClick={() => setOpenFormDialog(true)}
          className={classes.iconCard}/>
        <DeleteIcon onClick={favoriteDeleteCity}/>
      </CardActions>
    </Card>
  )
}

export default CardFavorites
