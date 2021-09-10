import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import {alpha, makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import SendIcon from '@material-ui/icons/Send';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {Button, IconButton} from '@material-ui/core'
import {fetchWeather, showDrawer} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import useWindowDimensions from '../helpers/getWindowDimensions'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    padding: 3,
  },
  buttonSearch: {
    marginLeft: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 5,
    width: '100%',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  formSumbit: {
    display: 'flex',
  },
  menuIcon:{
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const NavBar = () => {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState('')
  const favorites = useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()
  const {width} = useWindowDimensions()

  const submitHandler = (event) =>{
    event.preventDefault()
    dispatch(fetchWeather(searchInput, favorites))
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.navbar}>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>dispatch(showDrawer())}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
          <WbSunnyIcon/>
          <Typography className={classes.title} variant='h6' noWrap>
            Weather
          </Typography>
          <form onSubmit={submitHandler} className={classes.formSumbit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search City…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <Button
              variant='contained'
              color='primary'
              className={classes.buttonSearch}
              endIcon={<SendIcon/>}
              type='submit'
            >
              {width > 600 && 'Search'}
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
