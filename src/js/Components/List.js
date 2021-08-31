import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import WavesIcon from '@material-ui/icons/Waves';
import OpacityIcon from '@material-ui/icons/Opacity';
import {CardMedia} from '@material-ui/core'
import useWindowDimensions from '../Helpers/getWindowDimensions'
import useDaysWeek from '../Helpers/daysWeek'
import usePull from '../Helpers/usePullContext'

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
}))


const ListWeather = () => {
  const classes = useStyles()
  const {width} = useWindowDimensions()
  const {arrDaysWeek, arrDaysWeekMin} = useDaysWeek()
  const {weather, daysArray, metric, imagesArrayList} = usePull()

  return (
    <List dense className={classes.list}>
      {daysArray.map((value, index) => {
        return (
          <ListItem className={classes.listItem} key={value} button>
            <ListItemText
              className={classes.listWeek}
              primary={
                width > 600 ?
                arrDaysWeek[index] :
                arrDaysWeekMin[index]
              }/>
            <ListItemAvatar>
              <CardMedia
                component='img'
                alt='Weather image'
                height='30'
                image={imagesArrayList[index]}
                title='Contemplative Reptile'
              />
            </ListItemAvatar>
            <ListItemText className={classes.listText} primary={`
            ${Math.trunc(weather.data.daily[index].temp.min)}/
            ${Math.trunc(weather.data.daily[index].temp.max)}
            ${metric ? ' °C' : ' K'}`
            }/>
            <OpacityIcon color="primary"/>
            <ListItemText className={classes.listText} primary={
              `${weather.data.daily[index].pop}%`
            }/>
            <WavesIcon color="primary"/>
            <ListItemText className={classes.listText} primary={
              `${weather.data.daily[index].wind_speed}m/s`
            }/>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListWeather
