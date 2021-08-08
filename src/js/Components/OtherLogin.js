import React, {useContext, useState} from 'react'
import ContextApp from '../Context/ContextApp'

const OtherLogin = (props) => {
  const [OpenLogin, setOpenLogin] = useState(false)
  const {persons} = useContext(ContextApp)

  const OpenAccordion = () => setOpenLogin(!OpenLogin)

  return (
    <div className='other__login login'>
      {OpenLogin ? (
        <>
          <label onClick={OpenAccordion} className='label'>
            <p className='label__door text--label'>Login info</p>
            <img
              className='label__img'
              srcSet='../static/icon/CloseAccordion.png'
            ></img>
          </label>
          <p className='login__username text--muted'>
            {`Username: ${persons.login.username}`}</p>
          <p className='login__password text--muted'>
            {`Password: ${persons.login.password}`}</p>
          <p className='login__md5 text--muted'>
            {`md5: ${persons.login.md5}`}</p>
          <p className='login__salt text--muted'>
            {`salt: ${persons.login.salt}`}</p>
          <p className='login__sha1 text--muted'>
            {`sha1: ${persons.login.sha1}`}</p>
          <p className='login__sha256 text--muted'>
            {`sha256: ${persons.login.sha256}`}</p>
          <p className='login__uuid text--muted'>
            {`uuid: ${persons.login.uuid}`}</p>
        </>
      ) : (
        <label onClick={OpenAccordion} className='label'>
          <p className='label__door text--label'>Login info</p>
          <img
            className='label__img'
            srcSet='../static/icon/OpenAccordion.png'
          ></img>
        </label>
      )}
    </div>
  )
}

export default OtherLogin
