import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/usePullContext'
import GeneralLocation from './GeneralLocation'


const UserCardGeneral = (props) => {
  const [OpenGeneral, setOpenGeneral] = useState(false)
  const pullPersons = usePull().persons

  const OpenAccordion = useCallback(
      () => setOpenGeneral(!OpenGeneral), [setOpenGeneral, OpenGeneral])

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
          <p className='info__email text'>Email:{pullPersons.email}</p>
          <p className='info__phone-home text'>Home phone:{pullPersons.cell}</p>
          <p className='info__phone text'>Phone: {pullPersons.phone}</p>
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
