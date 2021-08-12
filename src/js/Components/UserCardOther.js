import React, {useMemo, useState} from 'react'
import OtherLogin from './OtherLogin'
import usePull from '../Helpers/usePullContext'
import {dateFormater, yearFormaterStric} from '../Helpers/formatersDate'


const UserCardOther = (props) => {
  const pullPersons = usePull().persons
  const [OpenOther, setOpenOther] = useState(false)

  const OpenAccordion = () => setOpenOther(!OpenOther)

  const memoizedFormater = useMemo(() =>
    dateFormater(pullPersons.registered.date), [pullPersons.registered.date])

  const memoizedFormaterStric = useMemo(() =>
    yearFormaterStric(pullPersons.registered.date),
  [pullPersons.registered.date])

  return (
    <div className='card__other other'>
      {OpenOther ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>ID info</p>
            <img
              alt='Image checked'
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          {
            (pullPersons.id &&
             pullPersons.id.name &&
             pullPersons.id.value) ?
              <p className='other__id text'>
                {pullPersons.id.name === '' &&
                pullPersons.id.value === null ?
                'Missing id info' :
                `Name: ${pullPersons.id.name} 
                Id value: ${pullPersons.id.value}`}
              </p> : <p className='other__id text text--muted'>
                Missing id info
              </p>
          }
          {
            (pullPersons.registered &&
             pullPersons.registered.date) &&
              <p className='other__registered text'>
                {
                  `Year: ${memoizedFormaterStric} 
                  Registration date: ${memoizedFormater}`
                }
              </p>
          }
          <OtherLogin />
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>ID info</p>
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

export default UserCardOther
