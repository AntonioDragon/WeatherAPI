import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CardWeather from './CardWeather'
import {Paper} from '@material-ui/core'
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) =>({
  blockCard: {
    padding: 5,
    margin: 10,
    display: 'block',
    overflowX: 'auto',
  },
  cardOverflow: {
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    width: 2800,
  },
}))

const BlockCards = ({hoursArr}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.blockCard} elevation={2}>
      <div className={classes.cardOverflow}>
        {
          hoursArr.map((value, index) =>
            <CardWeather key={value} value={value} index={index}/>,
          )
        }
      </div>
    </Paper>
  )
}

const mapStateToProps = (state) =>{
  return {
    hoursArr: state.weather.weather.hoursArr,
  }
}

export default connect(mapStateToProps, null)(BlockCards)
