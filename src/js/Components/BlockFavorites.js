import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'
import CardFavorites from './CardFavorites'
import {connect} from 'react-redux'

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

const BlockFavorites = ({favorites}) => {
  const classes = useStyles()

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

const mapStateToProps = (state) =>{
  return {
    favorites: state.favorites.favorites,
  }
}

export default connect(mapStateToProps, null)(BlockFavorites)

