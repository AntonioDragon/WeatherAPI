import React, {useMemo} from 'react'
import usePull from '../Helpers/usePullContext'
import {dateFormater, yearFormaterStric} from '../Helpers/formatersDate'

const UserCardInfo = () => {
  const pullPersons = usePull().persons

  const memoizedFormater = useMemo(() =>
    dateFormater(pullPersons.dob.date), [pullPersons.dob.date])

  const memoizedFormaterStric = useMemo(() =>
    yearFormaterStric(pullPersons.dob.date),
  [pullPersons.dob.date])

  return (
    <div className='card__people people'>
      <p className='people__name text'>
        {
          pullPersons.name ?
          (`${pullPersons.name.title && pullPersons.name.title} 
            ${pullPersons.name.last && pullPersons.name.last} 
            ${pullPersons.name.first && pullPersons.name.first}`) :
          'Missing info name'
        }
      </p>
      {
        pullPersons.gender &&
        <p className='people__gender text'>
          Gender: {pullPersons.gender}
        </p>
      }
      {
        pullPersons.nat &&
        <p className='people__nation text'>
          Nationality: {pullPersons.nat}
        </p>
      }
      <p className='people__dob text'>
        {
          pullPersons.dob &&
          pullPersons.dob.date &&
          `Date of Birth: ${memoizedFormater} 
           Year: ${memoizedFormaterStric}`
        }
      </p>
    </div>
  )
}

export default UserCardInfo
