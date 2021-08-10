import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'

const usePull = () =>{
  const {persons} = useContext(ContextApp)
  return persons.location
}

const GeneralLocation = () => {
  const [OpenLocation, setOpenLocation] = useState(false)
  const pullPersons = usePull()

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
          {
            pullPersons ?
            <>
              <p className='location__country text'>
                {`Country: ${pullPersons.country}`}</p>
              <p className='location__state text'>
                {`State: ${pullPersons.state}`}</p>
              <p className='location__city text'>
                {`City: ${pullPersons.city}`}</p>
              <p className='location__street text'>
                {`Street: ${pullPersons.street.name} 
                  №: ${pullPersons.street.number}`}</p>
              <p className='location__postcode text'>
                {`Postcode: ${pullPersons.postcode}`}</p>
              <p className='location__coordinates text'>
                {`Coordinates: ${pullPersons.coordinates.latitude} 
                  ${pullPersons.coordinates.longitude}`}</p>
              <p className='location__timezone text'>
                {`Timezone: ${pullPersons.timezone.description} 
                  ${pullPersons.timezone.offset}`}</p>
            </> :
            'Missing Info'
          }
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
