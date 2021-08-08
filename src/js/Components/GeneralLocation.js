import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'

const GeneralLocation = () => {
  const [OpenLocation, setOpenLocation] = useState(false)
  const {persons} = useContext(ContextApp)

  const OpenAccordion = () => setOpenLocation(!OpenLocation)

  return (
    <div className='info__location location'>
      {OpenLocation ?
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>Location info</p>
            <img
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          <p className='location__country text'>
            {`Country: ${persons.location.country}`}</p>
          <p className='location__state text'>
            {`State: ${persons.location.state}`}</p>
          <p className='location__city text'>
            {`City: ${persons.location.city}`}</p>
          <p className='location__street text'>
            {`Street: ${persons.location.street.name} 
          №: ${persons.location.street.number}`}</p>
          <p className='location__postcode text'>
            {`Postcode: ${persons.location.postcode}`}</p>
          <p className='location__coordinates text'>
            {`Coordinates: ${persons.location.coordinates.latitude} 
          ${persons.location.coordinates.longitude}`}</p>
          <p className='location__timezone text'>
            {`Timezone: ${persons.location.timezone.description} 
          ${persons.location.timezone.offset}`}</p>
        </> :
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>Location info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          />
        </label>
      }
    </div>
  )
}

export default GeneralLocation
