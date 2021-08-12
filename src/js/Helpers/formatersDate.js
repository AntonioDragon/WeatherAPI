import {format, formatDistanceToNowStrict} from 'date-fns'
import isValid from 'date-fns/isValid'

const dateFormater = (pull) => {
  if (isValid(new Date(pull))) return format(new Date(pull), 'dd/MM/yyyy')
  return 'Date not valid'
}

const yearFormaterStric = (pull) =>{
  if (isValid(new Date(pull)))
    return formatDistanceToNowStrict(new Date(pull), 'year')
  return 'Date not valid'
}

export {dateFormater, yearFormaterStric}
