import React, {useContext} from 'react'
import ContextApp from '../Context/ContextApp'

const usePull = () =>{
  const {persons} = useContext(ContextApp)
  return persons
}

const UserCardImg = (props) => {
  const pullPersons = usePull()

  return (
    <div className='card__img'>
      { pullPersons.picture.large ?
        <img src={pullPersons.picture.large} alt='Image User'/> :
        'Missing Image'
      }
    </div>
  )
}

export default UserCardImg
