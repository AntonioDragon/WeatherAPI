import getDay from 'date-fns/getDay'

const daysWeekCheck = () => {
  const dayWeek = getDay(new Date())
  let lengthWeek = 7
  const newArrWeekDays = []
  for (let i = dayWeek; i <= lengthWeek; i++)
    if (i <= 6) newArrWeekDays.push(i)
    else {
      i = -1
      lengthWeek = dayWeek - 1
    }
  return newArrWeekDays
}

export default daysWeekCheck
