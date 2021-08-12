import React from 'react'
import usePull from '../Helpers/usePullContext'


const UserCardImg = (props) => {
  const pullPersons = usePull().persons

  return (
    <div className='card__img'>
      {
        (pullPersons.picture &&
         pullPersons.picture.large) &&
        <img src={pullPersons.picture.large} alt='Image User'/>
      }
    </div>
  )
}

export default UserCardImg
