import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'
import OtherLogin from './OtherLogin'
import {format, formatDistanceToNowStrict} from 'date-fns'

const usePull = () =>{
  const {persons} = useContext(ContextApp)
  return persons
}

const UserCardOther = (props) => {
  const pullPersons = usePull()
  const [OpenOther, setOpenOther] = useState(false)

  const OpenAccordion = () => setOpenOther(!OpenOther)
  const dateFormater = () =>
    format(new Date(pullPersons.registered.date), 'dd/MM/yyyy')
  const yearFormaterStric = () => formatDistanceToNowStrict(
      new Date(pullPersons.registered.date), 'year')


  return (
    <div className='card__other other'>
      {OpenOther ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>ID info</p>
            <img
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          <p className='other__registered text'>
            {`Year: ${yearFormaterStric()} 
            Registration date: ${dateFormater()}`}</p>
          <p className='other__id text'>
            {pullPersons.id.name === '' &&
            pullPersons.id.value === null ?
            'Missing id info' :
            `Name: ${pullPersons.id.name} 
            Id value: ${pullPersons.id.value}`}
          </p>
          <OtherLogin />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>ID info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          />
        </label>
      )}
    </div>
  )
}

export default UserCardOther
