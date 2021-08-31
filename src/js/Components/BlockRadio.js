import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import usePull from '../Helpers/usePullContext';

const BlueRadio = withStyles({
  root: {
    color: blue[600],
    '&$checked': {
      color: blue[800],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlockRadio = (props) => {
  const {metric, weather, setWeather} = usePull()
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    props.setMetric(!metric)
    const temp = weather
    if (metric) {
      for (let value of temp.data.daily) {
        value.temp.min = value.temp.min + 273
        value.temp.max = value.temp.max + 273
      }
      for (let value of temp.data.hourly)
        value.temp = value.temp + 273
    } else {
      for (let value of temp.data.daily) {
        value.temp.min = value.temp.min - 273
        value.temp.max = value.temp.max - 273
      }
      for (let value of temp.data.hourly)
        value.temp = value.temp - 273
    }
    setWeather(temp)
    setSelectedValue(event.target.value);
  };

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
      <span>K</span>
    </div>
  );
}

export default BlockRadio
