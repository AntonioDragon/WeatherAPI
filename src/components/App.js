import React, {useEffect} from 'react'
import {Hidden, Drawer, CssBaseline} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useSnackbar} from 'notistack'
import {useDispatch, useSelector} from 'react-redux'
import {hideAlert, hideDrawer, loadFavoriteCities} from '../redux/actions'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import BlockFavorites from './BlockFavorites'
import AppContent from './AppContent'
import HomeContent from './HomeContent'
import addToSessionStorage from '../helpers/addToSessionStorage'

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

const ResponsiveDrawer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const {alert, drawer} = useSelector((state) => state.app)
  const {favorites} = useSelector((state) => state.favorites)
  const {enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (sessionStorage.hasOwnProperty('ArrayFavorite')) {
      dispatch(
        loadFavoriteCities(JSON.parse(sessionStorage.getItem('ArrayFavorite')))
      )
    }
  }, [])

  useEffect(() => {
    if (alert !== 'Missing')
      enqueueSnackbar(`${alert}! Please try to double-check the entered city`, {
        variant: 'warning',
      })
    return () => dispatch(hideAlert())
  }, [alert])

  useEffect(() => {
    if (favorites.length !== 0) addToSessionStorage(favorites)
  }, [favorites])

  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <nav className={classes.drawer} aria-label='favorites city'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawer}
            onClose={() => dispatch(hideDrawer())}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <BlockFavorites />
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
            <BlockFavorites />
          </Drawer>
        </Hidden>
      </nav>
      <Switch>
        <Route exact path='/' component={HomeContent} />
        <Route path='/:name' component={AppContent} />
      </Switch>
    </Router>
  )
}

export default ResponsiveDrawer
