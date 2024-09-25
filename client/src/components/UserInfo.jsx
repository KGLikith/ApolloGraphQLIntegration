import React from 'react'
import { FaIdBadge,FaEnvelope,FaPhone } from 'react-icons/fa'

const UserInfo = ({user}) => {
  return (
    <>
    <h5 className="mt-5">User Information</h5>
    <ul className="list-group w-50">
        <li className='list-group-item d-flex gap-2 align-items-center'>
            <FaIdBadge className='icon'/> {user.name}
        </li>
        <li className='list-group-item d-flex gap-2 align-items-center'>
            <FaEnvelope className='icon'/> {user.email}
        </li>
        <li className='list-group-item d-flex gap-2 align-items-center'>
            <FaPhone className='icon'/> {user.phone}
        </li>
    </ul>
    </>
  )
}

export default UserInfo