import React from 'react'
import {IconButton, makeStyles, Paper} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {hideDrawer} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import CardFavorites from './CardFavorites'

const useStyles = makeStyles((theme) => ({
  title:{
    marginLeft: 5,
  },
  headerDrawer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: 70,
    },
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const BlockFavorites = () => {
  const clasess = useStyles()
  const favorites = useSelector((state) => state.favorites.favorites)
  const dispatch = useDispatch()
  return (
    <>
      <div className={clasess.headerDrawer}>
        <h2 className={clasess.title}>Favorite city</h2>
        <IconButton
          edge='start'
          color='inherit'
          className={clasess.menuIcon}
          aria-label='open drawer'
          onClick={() => dispatch(hideDrawer())}
        >
          <CloseIcon fontSize='large' />
        </IconButton>
      </div>
      <Paper>
        {favorites.map((value, index) => (
          <CardFavorites key={index} value={value} id={index} />
        ))}
      </Paper>
    </>
  )
}

export default BlockFavorites
