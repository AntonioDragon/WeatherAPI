import React, {useCallback, useState} from 'react'
import {makeStyles, Switch} from '@material-ui/core'
import {useDispatch } from 'react-redux'
import {
  metricStateToFahrenheit,
  metricStateToCelsius,
} from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
}))

const BlockRadio = () => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(false)
  const dispatch = useDispatch()

  const handleChange = useCallback(() => {
    if (selectedValue) {
      dispatch(metricStateToCelsius())
      setSelectedValue(false)
    } else {
      dispatch(metricStateToFahrenheit())
      setSelectedValue(true)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue])
  
  return (
    <div className={classes.root}>
      <span>°C</span>
      <Switch
        checked={selectedValue}
        onChange={handleChange}
        color='primary'
        name='checkedA'
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <span>°F</span>
    </div>
  )
}

export default BlockRadio
