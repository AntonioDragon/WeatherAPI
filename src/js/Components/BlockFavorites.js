import React, {useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'
import CardFavorites from './CardFavorites'

const useStyles = makeStyles((theme) => ({
  buttonFavorites: {
    margin: 20,
  },
  blockFavorites: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      height: 100,
      display: 'flex',
      justifyContent: 'start',
    },
  },
}))

const BlockFavorites = () => {
  const classes = useStyles()
  const [favoritesCity, setFavoritesCity] = useState(
      [{content: 'London'}, {content: 'Москва'}, {content: 'Amsterdam'},
        {content: '+'}, {content: '+'}])

  return (
    <Paper className={classes.blockFavorites} elevation={2}>
      {
        favoritesCity.map((value, index)=>
          <CardFavorites
            key={index}
            value={value}
            id={index}
            setFavoritesCity={setFavoritesCity}
            favoritesCity={favoritesCity}
          />)
      }
    </Paper>
  )
}

export default BlockFavorites

