import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/usePullContext'

const GeneralLocation = () => {
  const [OpenLocation, setOpenLocation] = useState(false)
  const pullPerson = usePull().person

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
            {`Country: ${pullPerson.location.country}`}</p>
          <p className='location__state text'>
            {`State: ${pullPerson.location.state}`}</p>
          <p className='location__city text'>
            {`City: ${pullPerson.location.city}`}</p>
          <p className='location__street text'>
            {`Street: ${pullPerson.location.street.name} 
              №: ${pullPerson.location.street.number}`}</p>
          <p className='location__postcode text'>
            {`Postcode: ${pullPerson.location.postcode}`}</p>
          <p className='location__coordinates text'>
            {`Coordinates: ${pullPerson.location.coordinates.latitude} 
              ${pullPerson.location.coordinates.longitude}`}</p>
          <p className='location__timezone text'>
            {`Timezone: ${pullPerson.location.timezone.description} 
              ${pullPerson.location.timezone.offset}`}</p>
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
