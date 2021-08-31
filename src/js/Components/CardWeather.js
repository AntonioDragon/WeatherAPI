import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {CardActions} from '@material-ui/core'
import WavesIcon from '@material-ui/icons/Waves';
import OpacityIcon from '@material-ui/icons/Opacity';
import usePull from '../Helpers/usePullContext'

const useStyles = makeStyles((theme)=>({
  root: {
    width: 100,
    height: 200,
    margin: 10,
  },
  cardContent: {
    padding: 5,
  },
  icons: {
    padding: 0,
  },
}))

const CardWeather = (props) => {
  const classes = useStyles()
  const {weather, metric, imagesArrayCard} = usePull()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='50'
          image={imagesArrayCard[props.value]}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6'>
            {`${props.value >= 12 ? props.value-12 : props.value}:00 
            ${props.value > 12 ? 'am' : 'pm'}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`${Math.trunc(weather.data.hourly[props.value].temp)}
            ${metric ? ' ℃': ' K'}`}
          </Typography>
          <CardActions className={classes.icons} disableSpacing>
            <OpacityIcon color="primary"/>
            <Typography variant='body2' color='textPrimary' component='p'>
              {`${weather.data.hourly[props.value].pop}%`}
            </Typography>
          </CardActions>
          <CardActions className={classes.icons} disableSpacing>
            <WavesIcon color="primary"/>
            <Typography variant='body2' color='textPrimary' component='p'>
              {Math.trunc(weather.data.hourly[props.value].wind_speed)}
            </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default CardWeather
