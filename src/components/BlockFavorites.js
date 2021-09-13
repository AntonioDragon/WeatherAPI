import React from 'react'
import CardFavorites from './CardFavorites'
import {useDispatch, useSelector} from 'react-redux'
import {IconButton, makeStyles, Paper} from '@material-ui/core'
import { hideDrawer } from '../redux/actions'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  headerDrawer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: 70,
    },
  },
  menuIcon:{
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const BlockFavorites = () => {
  const clasess = useStyles()
  const favorites = useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()
  return (
    <>
    <div className={clasess.headerDrawer}>
      <h2>Favorite city</h2>
      <IconButton
          edge='start'
          color='inherit'
          className={clasess.menuIcon}
          aria-label='open drawer'
          onClick={()=>dispatch(hideDrawer())}
        >
          <CloseIcon fontSize='large'/>
      </IconButton>
    </div>
    <Paper>
    {favorites.map((value, index)=>
      <CardFavorites
        key={index}
        value={value}
        id={index}
      />)}
      </Paper>
    </>
  )
}

export default BlockFavorites

