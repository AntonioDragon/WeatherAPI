import React, {useContext} from 'react'
import ContextApp from '../Context/ContextApp'
import {format, formatDistanceToNowStrict} from 'date-fns'

const usePull = () =>{
  const {persons} = useContext(ContextApp)
  return persons
}

const UserCardInfo = () => {
  const pullPersons = usePull()

  const dateFormater = (pull) =>
    format(new Date(pull), 'dd/MM/yyyy')
  const yearFormaterStric = (pull) =>
    formatDistanceToNowStrict(new Date(pull), 'year')

  return (
    <div className='card__people people'>
      <p className='people__name text'>
        {
          (pullPersons.name.title ||
          pullPersons.name.last ||
          pullPersons.name.first) ? (
          `${pullPersons.name.title} 
          ${pullPersons.name.last} 
          ${pullPersons.name.first}`) :
          'Missing info'
        }
      </p>
      <p className='people__gender text'>
        {
          pullPersons.gender ?
          `Gender: ${pullPersons.gender}` :
          'Missing info'
        }
      </p>
      <p className='people__nation text'>
        {
          pullPersons.nat ?
          `Nationality: ${pullPersons.nat}` :
          'Missing info'
        }
      </p>
      <p className='people__dob text'>
        {
          (pullPersons.dob.date ||
          pullPersons.dob.date) ?
          `Date of Birth: ${dateFormater(pullPersons.dob.date)} 
          Year: ${yearFormaterStric(pullPersons.dob.date)}` :
          'Missing info'
        }
      </p>
    </div>
  )
}

export default UserCardInfo
