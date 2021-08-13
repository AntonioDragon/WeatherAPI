import React from 'react'
import usePull from '../Helpers/usePullContext'

const UserCardImg = (props) => {
  const pullPersons = usePull().persons

  return (
    <div className='card__img'>
      {
        pullPersons.picture.large ?
        <img src={pullPersons.picture.large} alt='Image User'/> :
        <p className="text--muted">Missing Image</p>
      }
    </div>
  )
}

export default UserCardImg
