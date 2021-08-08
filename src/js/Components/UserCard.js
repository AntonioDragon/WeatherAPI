import React from 'react'
import UserCardGeneral from './UserCardGeneral'
import UserCardImg from './UserCardImg'
import UserCardInfo from './UserCardInfo'
import UserCardOther from './UserCardOther'

const UserCard = (props) => {
  return (
    <div className='output__card card'>
      <UserCardImg />
      <UserCardInfo />
      <UserCardGeneral />
      <UserCardOther />
    </div>
  )
}

export default UserCard
