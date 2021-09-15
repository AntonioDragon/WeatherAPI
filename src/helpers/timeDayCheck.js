import {format} from 'date-fns'

const timeDayCheck = () => {
  let hours
  const newArrTime = []
  const timeNow = format(new Date(), 'p')
  if (timeNow[1] === ':') hours = parseInt(timeNow[0])
  else hours = parseInt(timeNow[0] + timeNow[1])
  let lengthTime = 24
  for (let i = hours; i < lengthTime + 1; i++)
    if (i < 24) newArrTime.push(i)
    else {
      i = -1
      lengthTime = hours - 1
    }
  return newArrTime
}

export default timeDayCheck
