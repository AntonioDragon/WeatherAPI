import React, {useContext} from 'react'
import ContextApp from '../Context/ContextApp'

const UserCardImg = (props) => {
  const {persons} = useContext(ContextApp)

  return (
    <div className='card__img'>
      <img src={persons.picture.large} alt='Image User'></img>
    </div>
  )
}

export default UserCardImg
