import React, {useMemo} from 'react'
import usePull from '../Helpers/usePullContext'
import {dateFormater, yearFormaterStric} from '../Helpers/formatersDate'

const UserCardInfo = () => {
  const pullPerson = usePull().person

  const memoizedFormater = useMemo(() =>
    dateFormater(pullPerson.dob.date), [pullPerson.dob.date])

  const memoizedFormaterStric = useMemo(() =>
    yearFormaterStric(pullPerson.dob.date), [pullPerson.dob.date])

  return (
    <div className='card__people people'>
      <p className='people__name text'>
        {`${pullPerson.name.title} 
         ${pullPerson.name.last} 
         ${pullPerson.name.first}`}
      </p>
      <p className='people__gender text'>
        {`Gender: ${pullPerson.gender}`}
      </p>
      <p className='people__nation text'>
        {`Nationality: ${pullPerson.nat}`}
      </p>
      <p className='people__dob text'>
        {`Date of Birth: ${memoizedFormater} 
        Year: ${memoizedFormaterStric}`}
      </p>
    </div>
  )
}

export default UserCardInfo
