import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {CardActions} from '@material-ui/core'
import WavesIcon from '@material-ui/icons/Waves'
import OpacityIcon from '@material-ui/icons/Opacity'
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100,
    height: 200,
    margin: 10,
  },
  cardContent: {
    padding: 5,
  },
  info: {
    padding: 3,
  },
}))

const CardWeather = ({ value }) => {
  const classes = useStyles()
  const metric = useSelector((state) => state.weather.metric)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='70'
          image={value.iconWether}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6'>
            {`${value.hourWeek >= 12 ? value.hourWeek - 12 : value.hourWeek}:00 
            ${value.hourWeek > 12 ? 'am' : 'pm'}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`${
              metric
                ? Math.trunc(value.temp)
                : Math.trunc((value.temp * 9) / 5 + 32)
            }
           ${metric ? ' ℃' : '°F'}`}
          </Typography>
          <CardActions className={classes.info} disableSpacing>
            <OpacityIcon color='primary' />
            <Typography variant='body2' color='textPrimary' component='p'>
              {`${Math.trunc(value.pop * 100)}%`}
            </Typography>
          </CardActions>
          <CardActions className={classes.info} disableSpacing>
            <WavesIcon color='primary' />
            <Typography variant='body2' color='textPrimary' component='p'>
              {Math.trunc(value.wind_speed)}
            </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardWeather
