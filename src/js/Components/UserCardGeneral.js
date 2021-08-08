import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'
import GeneralLocation from './GeneralLocation'

const UserCardGeneral = (props) => {
  const [OpenGeneral, setOpenGeneral] = useState(false)
  const {persons} = useContext(ContextApp)

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
            ></img>
          </label>
          <p className='info__email text'>
            {`Email: ${persons.email}`}</p>
          <p className='info__phone-home text'>
            {`Home phone: ${persons.cell}`}</p>
          <p className='info__phone text'>
            {`Phone: ${persons.phone}`}</p>
          <GeneralLocation />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>General info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          ></img>
        </label>
      )}
    </div>
  )
}

export default UserCardGeneral
