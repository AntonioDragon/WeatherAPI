import React, {useCallback, useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import {alpha, makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import SendIcon from '@material-ui/icons/Send'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import {Button, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {showDrawer} from '../redux/actions'
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {useSnackbar} from 'notistack'

import transformCity from '../helpers/transformCity'
import useWindowDimensions from '../helpers/getWindowDimensions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'Center',
    textDecoration: 'none',
    color: 'White'
  },
  logo_icon: {
    textAlign: 'Center',
    marginRight: 5
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 5,
    width: '100%',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  formSumbit: {
    display: 'flex'
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const {width} = useWindowDimensions()
  const {enqueueSnackbar} = useSnackbar()
  const history = useHistory()

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault()
      if (searchInput.trim().length !== 0) {
        const transcriptCity = transformCity(searchInput)
        history.push(`${transcriptCity}`)
        setSearchInput('')
      } else
        enqueueSnackbar('The submitted data is empty!', {variant: 'warning'})
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [history, searchInput]
  )

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.navbar}>
        <IconButton
          edge='start'
          className={classes.menuIcon}
          color='inherit'
          aria-label='open drawer'
          onClick={() => dispatch(showDrawer())}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Link to='/' className={classes.logo}>
          <WbSunnyIcon className={classes.logo_icon} />
          {width > 600 && (
            <Typography className={classes.title} variant='h6' noWrap>
              Weather
            </Typography>
          )}
        </Link>
        <form onSubmit={submitHandler} className={classes.formSumbit}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search City…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{'aria-label': 'search'}}
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput || ''}
            />
          </div>
          <Button
            variant='contained'
            color='primary'
            className={classes.buttonSearch}
            endIcon={<SendIcon />}
            type='submit'
          >
            {width > 700 && 'Search'}
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
