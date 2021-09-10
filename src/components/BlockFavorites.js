import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'
import CardFavorites from './CardFavorites'
import {useSelector} from 'react-redux'

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
  const favorites = useSelector(state => state.favorites.favorites)
  return (
    <Paper className={classes.blockFavorites} elevation={2}>
      {
        favorites.map((value, index)=>
          <CardFavorites
            key={index}
            value={value}
            id={index}
          />)
      }
    </Paper>
  )
}

export default BlockFavorites

