import React, {useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import {hideAlert, hideDrawer, loadFavoriteCities} from '../redux/actions'
import NavBar from './NavBar'
import BlockFavorites from './BlockFavorites'
import addToSessionStorage from '../helpers/addToSessionStorage'
import AppContent from './AppContent'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: 10,
  },
}))

function ResponsiveDrawer() {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const {alert, drawer} = useSelector(state => state.app)
  const {favorites} = useSelector(state => state.favorites)
  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {
       if(sessionStorage.hasOwnProperty('ArrayFavorite')){
         dispatch(loadFavoriteCities(JSON.parse(sessionStorage.getItem('ArrayFavorite'))))
       }
     }, [])

  useEffect(() => {
    if(alert !== 'Missing')
      enqueueSnackbar(`${alert}! Please try to double-check the entered city`, {variant: 'warning'})
    return () => dispatch(hideAlert())
  }, [alert])

  useEffect(() => {
    if(favorites.length !== 0)
      addToSessionStorage(favorites)
  }, [favorites])

  return (
    <>
      <CssBaseline />
      <NavBar/>
      <nav className={classes.drawer} aria-label='favorites city'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawer}
            onClose={()=>dispatch(hideDrawer())}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
           <BlockFavorites/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <BlockFavorites/>
          </Drawer>
        </Hidden>
      </nav>
      <AppContent/>
    </>
  )
}

export default ResponsiveDrawer
