import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CardWeather from './CardWeather'
import {Paper} from '@material-ui/core'
import usePull from '../Helpers/usePullContext'

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

const BlockCards = () => {
  const classes = useStyles()
  const {hourseArray} = usePull()
  return (
    <Paper className={classes.blockCard} elevation={2}>
      <div className={classes.cardOverflow}>
        {
          hourseArray.map((value, index) =>
            <CardWeather key={value} value={index}/>,
          )
        }
      </div>
    </Paper>
  )
}

export default BlockCards

