import React from 'react'

import CalificationIndicator from '../CalificationIndicator'
import './profile.css'

function ProfileDataDashboard (props) {
  const { userData } = props
  return (
    <div className='col-12 col-md-5'>
      {/* <h1 className='col-9'>{`${userData.firstName} ${userData.lastName}`}</h1> */}
      <div className='profile__img_content'>
        <figure><img
          className='rounded-circle profile__image'
          width='50%'
          src='https://picsum.photos/200/300'
          alt='profile'
                />
        </figure>
      </div>
      <div className='profile__data d-flex flex-column'>
        <span>{props.data.email}</span>
        <span>{props.data.municipality}</span>
        <span>{props.data.city}</span>
        <CalificationIndicator />
      </div>
    </div>
  )
}

export default ProfileDataDashboard
