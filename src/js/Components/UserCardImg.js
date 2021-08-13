import React from 'react'
import usePull from '../Helpers/usePullContext'

const UserCardImg = (props) => {
  const pullPerson = usePull().person

  return (
    <div className='card__img'>
      {
        pullPerson.picture.large ?
        <img src={pullPerson.picture.large} alt='Image User'/> :
        <p className="text--muted">Missing Image</p>
      }
    </div>
  )
}

export default UserCardImg
