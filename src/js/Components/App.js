import React from 'react'
import {CircularProgress, makeStyles, Paper} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import NavBar from './NavBar'
import BlockCards from './BlockCards'
import ListWeather from './List'
import BlockFavorites from './BlockFavorites'
import BlockRadio from './BlockRadio'
import {connect} from 'react-redux'

const useStyles = makeStyles(() => ({
  title: {
    margin: 30,
    fontSize: 35,
  },
  wetherInfoDays: {
    padding: 10,
  },
  errorOutput: {
    color: 'red',
  },
  loading: {
    top: 80,
    left: 200,
  },
}))


const App = ({city, alert, loading}) => {
  const classes = useStyles()
  return (
    <>
      <NavBar />
      {alert == 'Missing' ? (
        (loading) ? <CircularProgress className={classes.loading}/> :
        (city != 'Missing') && (
          <>
            <h1 className={classes.title}>{city}</h1>
            <BlockRadio/>
            <Paper className={classes.wetherInfoDays} elevation={3}>
              <Paper className={classes.wetherInfoTodayTime} elevation={3}>
                <ListWeather />
              </Paper>
              <BlockCards />
            </Paper>
          </>
        )
       ) : (
        <Alert severity="error">
          Please try to double-check the entered city or try again later
        </Alert>
      )}
      <h2>Favorites city</h2>
      <BlockFavorites />
    </>
  )
}

const mapStateToProps = (state) =>{
  return {
    city: state.weather.weather.city,
    alert: state.app.alert,
    loading: state.app.loading,
  }
}

export default connect(mapStateToProps, null)(App)
