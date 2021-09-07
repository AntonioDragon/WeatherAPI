import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WavesIcon from '@material-ui/icons/Waves'
import OpacityIcon from '@material-ui/icons/Opacity'
import {CardMedia} from '@material-ui/core'
import useWindowDimensions from '../Helpers/getWindowDimensions'
import useDaysWeek from '../Helpers/daysWeek'
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  list: {
    Maxwidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    padding: 5,
  },
  listWeek: {
    maxWidth: 100,
  },
  listText: {
    maxWidth: 100,
  },
  listImg: {
    width: 50,
  },
}))


const ListWeather = ({weather}) => {
  const classes = useStyles()
  const {width} = useWindowDimensions()
  const {arrDaysWeek, arrDaysWeekMin} = useDaysWeek()
  return (
    <List dense className={classes.list}>
      {weather.daysArr.map((value, index) => {
        return (
          <ListItem className={classes.listItem} key={value} button>
            <ListItemText
              className={classes.listWeek}
              primary={
                width > 600 ?
                arrDaysWeek[value] :
                arrDaysWeekMin[value]
              }/>
            <ListItemAvatar>
              <CardMedia
                component='img'
                alt='Weather image'
                height='30'
                image={weather.iconsWeatherDaily[index]}
                title='Contemplative Reptile'
                className ={classes.listImg}
              />
            </ListItemAvatar>
            <ListItemText className={classes.listText} primary={`
            ${Math.trunc(weather.weatherDaily[index].temp.min)}/
            ${Math.trunc(weather.weatherDaily[index].temp.max)}
             ${weather.metric ? ' °C' : '°F'}`
            }/>
            <OpacityIcon color="primary"/>
            <ListItemText className={classes.listText} primary={
              `${weather.weatherDaily[index].pop}%`
            }/>
            <WavesIcon color="primary"/>
            <ListItemText className={classes.listText} primary={
              `${weather.weatherDaily[index].wind_speed}m/s`
            }/>
          </ListItem>
        )
      })}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather,
  }
}

export default connect(mapStateToProps, null)(ListWeather)
