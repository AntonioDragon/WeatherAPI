import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/usePullContext'

const OtherLogin = (props) => {
  const [OpenLogin, setOpenLogin] = useState(false)
  const pullPerson = usePull().person

  const OpenAccordion = useCallback(
      () => setOpenLogin(!OpenLogin), [setOpenLogin, OpenLogin])

  return (
    <div className='other__login login'>
      {OpenLogin ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>Login info</p>
            <img
              alt='Image checked'
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            />
          </label>
          <p className='login__username text--muted'>
            {`Username: ${pullPerson.login.username}`}</p>
          <p className='login__password text--muted'>
            {`Password: ${pullPerson.login.password}`}</p>
          <p className='login__md5 text--muted'>
            {`md5: ${pullPerson.login.md5}`}</p>
          <p className='login__salt text--muted'>
            {`salt: ${pullPerson.login.salt}`}</p>
          <p className='login__sha1 text--muted'>
            {`sha1: ${pullPerson.login.sha1}`}</p>
          <p className='login__sha256 text--muted'>
            {`sha256: ${pullPerson.login.sha256}`}</p>
          <p className='login__uuid text--muted'>
            {`uuid: ${pullPerson.login.uuid}`}</p>
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>Login info</p>
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

export default OtherLogin
