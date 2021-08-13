import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/usePullContext'

const GeneralLocation = () => {
  const [OpenLocation, setOpenLocation] = useState(false)
  const pullPersons = usePull().persons

  const OpenAccordion = useCallback(
      () => setOpenLocation(!OpenLocation), [setOpenLocation, OpenLocation])

  return (
    <div className='info__location location'>
      {OpenLocation ?
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>Location info</p>
            <img
              alt='Image checked'
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          <p className='location__country text'>
            {`Country: ${pullPersons.location.country}`}</p>
          <p className='location__state text'>
            {`State: ${pullPersons.location.state}`}</p>
          <p className='location__city text'>
            {`City: ${pullPersons.location.city}`}</p>
          <p className='location__street text'>
            {`Street: ${pullPersons.location.street.name} 
              №: ${pullPersons.location.street.number}`}</p>
          <p className='location__postcode text'>
            {`Postcode: ${pullPersons.location.postcode}`}</p>
          <p className='location__coordinates text'>
            {`Coordinates: ${pullPersons.location.coordinates.latitude} 
              ${pullPersons.location.coordinates.longitude}`}</p>
          <p className='location__timezone text'>
            {`Timezone: ${pullPersons.location.timezone.description} 
              ${pullPersons.location.timezone.offset}`}</p>
        </> :
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>Location info</p>
          <img
            alt='Image checked'
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          />
        </label>
      }
    </div>
  )
}

export default GeneralLocation
