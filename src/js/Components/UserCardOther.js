import React, {useCallback, useMemo, useState} from 'react'
import OtherLogin from './OtherLogin'
import usePull from '../Helpers/usePullContext'
import {dateFormater, yearFormaterStric} from '../Helpers/formatersDate'


const UserCardOther = (props) => {
  const pullPerson = usePull().person
  const [OpenOther, setOpenOther] = useState(false)

  const OpenAccordion = useCallback(
      () => setOpenOther(!OpenOther), [setOpenOther, OpenOther])

  const memoizedFormater = useMemo(() =>
    dateFormater(pullPerson.registered.date), [pullPerson.registered.date])

  const memoizedFormaterStric = useMemo(() =>
    yearFormaterStric(pullPerson.registered.date),
  [pullPerson.registered.date])

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
          <p className='other__id text'>
            {pullPerson.id.name === '' &&
            pullPerson.id.value === null ?
            'Missing id info' :
            `Name: ${pullPerson.id.name} 
            Id value: ${pullPerson.id.value}`}
          </p>
          <p className='other__registered text'>
            {
              `Year: ${memoizedFormaterStric} 
              Registration date: ${memoizedFormater}`
            }
          </p>
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
