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
import {connect} from 'react-redux'

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

const CardWeather = ({weather, index, value}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='50'
          image={weather.iconsWeatherHours[index]}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h6'>
            {`${value >= 12 ? value-12 : value}:00 
            ${value > 12 ? 'am' : 'pm'}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`${Math.trunc(weather.weatherHourly[index].temp)}
             ${weather.metric ? ' ℃': '°F'}`}
          </Typography>
          <CardActions className={classes.icons} disableSpacing>
            <OpacityIcon color="primary"/>
            <Typography variant='body2' color='textPrimary' component='p'>
              {`${weather.weatherHourly[index].pop}%`}
            </Typography>
          </CardActions>
          <CardActions className={classes.icons} disableSpacing>
            <WavesIcon color="primary"/>
            <Typography variant='body2' color='textPrimary' component='p'>
              {Math.trunc(weather.weatherHourly[index].wind_speed)}
            </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const mapStateToProps = (state) =>{
  return {
    weather: state.weather.weather,
  }
}

export default connect(mapStateToProps, null)(CardWeather)
