import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {Drawer, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import BlockFavorites from './BlockFavorites'
import { useDispatch, useSelector } from 'react-redux'
import { hideDrawer } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  drawer: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerTitle: {
      display: 'flex',
    },
    iconTitle: {
      margin: 5,
    },
    headFavorite: {
      textAlign: 'Center',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
    }
}))

const DrawerFavorite = () => {
  const classes = useStyles()
  const drawer = useSelector(state => state.app.drawer)
  const dispatch = useDispatch()

  return (
    <Drawer className={classes.drawer} anchor={'left'} open={drawer} onClose={()=>dispatch(hideDrawer())}>
        <div className={classes.root}>
          <AppBar position={'static'}>
            <Toolbar className={classes.navbar}>
              <WbSunnyIcon className={classes.iconTitle}/>
              <Typography variant='h6' noWrap>
                Weather
              </Typography>
              <IconButton
                edge="end"
                className={classes.menuIcon}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>dispatch(hideDrawer())}
              >
                <CloseIcon fontSize='large'/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <h2 className={classes.headFavorite}>Favorites city</h2>
        <BlockFavorites />
    </Drawer>
  )
}

export default DrawerFavorite
