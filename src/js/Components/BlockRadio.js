import React, {useCallback} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'
import Radio from '@material-ui/core/Radio'
import {connect} from 'react-redux'
import {metricStateToFahrenheit, metricStateToСelsius} from '../Redux/actions'

const BlueRadio = withStyles({
  root: {
    color: blue[600],
    '&$checked': {
      color: blue[800],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />)

const BlockRadio = (props) => {
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChange = useCallback(
      () => {
        const {metricStateToСelsius, metricStateToFahrenheit, weather} = props
        if (selectedValue == 'b') metricStateToСelsius(weather)
        if (selectedValue == 'a') metricStateToFahrenheit(weather)
        setSelectedValue(event.target.value)
      },
      [props],
  )

  return (
    <div>
      <BlueRadio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{'aria-label': 'A'}}
      />
      <span>°C</span>
      <BlueRadio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{'aria-label': 'B'}}
      />
      <span>°F</span>
    </div>
  )
}

const mapDispatchToProps = {
  metricStateToFahrenheit,
  metricStateToСelsius,
}

const mapStateToProps = (state) =>{
  return {
    weather: state.weather.weather,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRadio)
