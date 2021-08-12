import React, {useState} from 'react'
import usePull from '../Helpers/usePullContext'

const OtherLogin = (props) => {
  const [OpenLogin, setOpenLogin] = useState(false)
  const pullPersons = usePull().persons

  const OpenAccordion = () => setOpenLogin(!OpenLogin)

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
          {
            pullPersons.login ?
            <>
              {
                pullPersons.login.username &&
                <p className='login__username text--muted'>
                  {`Username: ${pullPersons.login.username}`}</p>
              }
              {
                pullPersons.login.password &&
                <p className='login__password text--muted'>
                  {`Password: ${pullPersons.login.password}`}</p>
              }
              {
                pullPersons.login.md5 &&
                <p className='login__md5 text--muted'>
                  {`md5: ${pullPersons.login.md5}`}</p>
              }
              {
                pullPersons.login.salt &&
                <p className='login__salt text--muted'>
                  {`salt: ${pullPersons.login.salt}`}</p>
              }
              {
                pullPersons.login.sha1 &&
                <p className='login__sha1 text--muted'>
                  {`sha1: ${pullPersons.login.sha1}`}</p>
              }
              {
                pullPersons.login.sha256 &&
                <p className='login__sha256 text--muted'>
                  {`sha256: ${pullPersons.login.sha256}`}</p>
              }
              {
                pullPersons.login.uuid &&
                <p className='login__uuid text--muted'>
                  {`uuid: ${pullPersons.login.uuid}`}</p>
              }
            </> :
            <p className='text text--muted'>Missing info login</p>
          }
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
