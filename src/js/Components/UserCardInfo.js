import React, {useContext} from 'react'
import ContextApp from '../Context/ContextApp'

const UserCardInfo = () => {
  const {persons} = useContext(ContextApp)

  return (
    <div className='card__people people'>
      <p className='people__name text'>
        {`${persons.name.title} ${persons.name.last} ${persons.name.first}`}</p>
      <p className='people__gender text'>
        {`Gender: ${persons.gender}`}</p>
      <p className='people__nation text'>
        {`Nationality: ${persons.nat}`}</p>
      <p className='people__dob text'>
        {`Date of Birth: ${new Date(
            persons.dob.date
        ).toLocaleDateString()} Age: ${persons.dob.age}`}</p>
    </div>
  )
}

export default UserCardInfo
