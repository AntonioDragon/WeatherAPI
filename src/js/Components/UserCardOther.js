import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'
import OtherLogin from './OtherLogin'

const UserCardOther = (props) => {
  const [OpenOther, setOpenOther] = useState(false)
  const {persons} = useContext(ContextApp)

  const OpenAccordion = () => setOpenOther(!OpenOther)

  return (
    <div className='card__other other'>
      {OpenOther ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>ID info</p>
            <img
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            ></img>
          </label>
          <p className='other__registered text'>{`Year: ${
            persons.registered.age
          } Registration date: ${new Date(
              persons.registered.date
          ).toLocaleDateString()}`}</p>
          <p className='other__id text'>
            {persons.id.name === '' && persons.id.value === null
              ? 'Missing id info'
              : `Name: ${persons.id.name} Id value: ${persons.id.value}`}
          </p>
          <OtherLogin />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>ID info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          ></img>
        </label>
      )}
    </div>
  )
}

export default UserCardOther
