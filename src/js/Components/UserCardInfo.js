import React, {useMemo} from 'react'
import usePull from '../Helpers/usePullContext'
import {dateFormater, yearFormaterStric} from '../Helpers/formatersDate'

const UserCardInfo = () => {
  const pullPersons = usePull().persons

  const memoizedFormater = useMemo(() =>
    dateFormater(pullPersons.dob.date), [pullPersons.dob.date])

  const memoizedFormaterStric = useMemo(() =>
    yearFormaterStric(pullPersons.dob.date), [pullPersons.dob.date])

  return (
    <div className='card__people people'>
      <p className='people__name text'>
        {`${pullPersons.name.title} 
         ${pullPersons.name.last} 
         ${pullPersons.name.first}`}
      </p>
      <p className='people__gender text'>
        {`Gender: ${pullPersons.gender}`}
      </p>
      <p className='people__nation text'>
        {`Nationality: ${pullPersons.nat}`}
      </p>
      <p className='people__dob text'>
        {`Date of Birth: ${memoizedFormater} 
        Year: ${memoizedFormaterStric}`}
      </p>
    </div>
  )
}

export default UserCardInfo
