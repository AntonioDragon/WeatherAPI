import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'
import GeneralLocation from './GeneralLocation'

const usePull = () =>{
  const {persons} = useContext(ContextApp)
  return persons
}

const UserCardGeneral = (props) => {
  const [OpenGeneral, setOpenGeneral] = useState(false)
  const pullPersons = usePull()

  const OpenAccordion = () => setOpenGeneral(!OpenGeneral)

  return (
    <div className='card__general info'>
      {OpenGeneral ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>General info</p>
            <img
              alt='Image checked'
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          {
            pullPersons.email ?
            <p className='info__email text'>
              Email:{pullPersons.email}
            </p> : <p className='info__email text text--muted'>
              Missing info email
            </p>
          }
          {
            pullPersons.cell ?
            <p className='info__phone-home text'>
              Home phone:{pullPersons.cell}
            </p> : <p className='info__phone-home text text--muted'>
              Missing info cell
            </p>
          }

          {
            pullPersons.phone ?
            <p className='info__phone text'>
              Phone: {pullPersons.phone}
            </p> : <p className='info__phone text text--muted'>
              Missing info phone
            </p>
          }
          <GeneralLocation />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>General info</p>
          <img
            alt='Image checked'
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          />
        </label>
      )}
    </div>
  )
}

export default UserCardGeneral
