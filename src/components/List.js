import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WavesIcon from '@material-ui/icons/Waves'
import OpacityIcon from '@material-ui/icons/Opacity'
import {CardMedia} from '@material-ui/core'
import useWindowDimensions from '../helpers/getWindowDimensions'
import useDaysWeek from '../helpers/daysWeek'
import {useSelector} from 'react-redux'

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

const ListWeather = () => {
  const classes = useStyles()
  const {width} = useWindowDimensions()
  const {arrDaysWeek, arrDaysWeekMin} = useDaysWeek()
  const {weather, metric} = useSelector((state) => state.weather)
  return (
    <List dense className={classes.list}>
      {weather.weatherDaily.map((value) => {
        return (
          <ListItem className={classes.listItem} key={value.dayWeek} button>
            <ListItemText
              className={classes.listWeek}
              primary={
                width > 600
                  ? arrDaysWeek[value.dayWeek]
                  : arrDaysWeekMin[value.dayWeek]
              }
            />
            <ListItemAvatar>
              <CardMedia
                component='img'
                alt='Weather image'
                height='30'
                image={value.iconWether}
                title='Contemplative Reptile'
                className={classes.listImg}
              />
            </ListItemAvatar>
            <ListItemText
              className={classes.listText}
              primary={`
            ${
              metric
                ? Math.trunc(value.temp.min)
                : Math.trunc((value.temp.min * 9) / 5 + 32)
            }/
            ${
              metric
                ? Math.trunc(value.temp.max)
                : Math.trunc((value.temp.min * 9) / 5 + 32)
            }
             ${metric ? ' °C' : '°F'}`}
            />
            <OpacityIcon color='primary' />
            <ListItemText
              className={classes.listText}
              primary={`${Math.trunc(value.pop * 100)}%`}
            />
            <WavesIcon color='primary' />
            <ListItemText
              className={classes.listText}
              primary={`${value.wind_speed}m/s`}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListWeather
