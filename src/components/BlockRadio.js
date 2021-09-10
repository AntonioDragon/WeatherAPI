import {makeStyles, Switch} from '@material-ui/core'
import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {metricStateToFahrenheit, metricStateToCelsius} from '../redux/actions'
const useStyles = makeStyles((theme) =>({
  root: {
    margin: 10, 
  },
}));

const BlockRadio = () => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(false)
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather.weather)
  const handleChange = useCallback(
      () => {
        if (selectedValue){
          dispatch(metricStateToCelsius(weather))
          setSelectedValue(false)
        } else {
          dispatch(metricStateToFahrenheit(weather))
          setSelectedValue(true)
        }
      },
      [dispatch, weather, selectedValue],
  )
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
