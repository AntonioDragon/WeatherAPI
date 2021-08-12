import React from 'react'
import usePull from '../Helpers/usePullContext'


const UserCardImg = (props) => {
  const pullPersons = usePull()

  return (
    <div className='card__img'>
      {
        (pullPersons.persons.picture &&
         pullPersons.persons.picture.large) &&
        <img src={pullPersons.persons.picture.large} alt='Image User'/>
      }
    </div>
  )
}

export default UserCardImg
