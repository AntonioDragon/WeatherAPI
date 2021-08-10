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
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          <p className='info__email text'>
            {
              pullPersons.email ?
              `Email: ${pullPersons.email}` :
              'Missing info'
            }
          </p>
          <p className='info__phone-home text'>
            {
              pullPersons.cell ?
              `Home phone: ${pullPersons.cell}` :
              'Missing info'
            }
          </p>
          <p className='info__phone text'>
            {
              pullPersons.phone ?
              `Phone: ${pullPersons.phone}` :
              'Missing info'
            }
          </p>
          <GeneralLocation />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>General info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          />
        </label>
      )}
    </div>
  )
}

export default UserCardGeneral
