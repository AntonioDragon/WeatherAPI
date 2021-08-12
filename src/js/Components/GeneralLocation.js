import React, {useState} from 'react'
import usePull from '../Helpers/usePullContext'

const GeneralLocation = () => {
  const [OpenLocation, setOpenLocation] = useState(false)
  const pullPersons = usePull().persons

  const OpenAccordion = () => setOpenLocation(!OpenLocation)

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
          {
            pullPersons.location ?
            <>
              {
                pullPersons.location.country &&
                <p className='location__country text'>
                  {`Country: ${pullPersons.location.country}`}</p>
              }
              {
                pullPersons.location.state &&
                <p className='location__state text'>
                  {`State: ${pullPersons.location.state}`}</p>
              }
              {
                pullPersons.location.city &&
                <p className='location__city text'>
                  {`City: ${pullPersons.location.city}`}</p>
              }
              {
                pullPersons.location.street &&
                <p className='location__street text'>
                  {`Street: ${pullPersons.location.street.name} 
                    №: ${pullPersons.location.street.number}`}</p>
              }
              {
                pullPersons.location.postcode &&
                <p className='location__postcode text'>
                  {`Postcode: ${pullPersons.location.postcode}`}</p>
              }
              {
                (pullPersons.location.coordinates &&
                 pullPersons.location.coordinates.latitude &&
                 pullPersons.location.coordinates.longitude) &&
                <p className='location__coordinates text'>
                  {`Coordinates: ${pullPersons.location.coordinates.latitude} 
                    ${pullPersons.location.coordinates.longitude}`}</p>
              }
              {
                (pullPersons.location.timezone &&
                 pullPersons.location.timezone.description &&
                 pullPersons.location.timezone.offset) &&
                <p className='location__timezone text'>
                  {`Timezone: ${pullPersons.location.timezone.description} 
                    ${pullPersons.location.timezone.offset}`}</p>
              }
            </> : <p className='text text--muted'>Missing Info</p>
          }
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
