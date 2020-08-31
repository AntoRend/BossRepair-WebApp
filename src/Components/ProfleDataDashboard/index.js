import React from 'react'

import CalificationIndicator from '../CalificationIndicator'

function ProfileDataDashboard (props) {
  return (
    <div className='col-12 col-md-5'>
      <div className='profile__img'>
        <figure><img
          className='rounded-circle'
          width='50%'
          src='https://picsum.photos/200/300'
          alt='profile'
        />
        </figure>
      </div>
      <div className='profile__data'>
        <p>{props.data.email}</p>
        <p>{props.data.city}</p>
        <p>{props.data.city}</p>
        <CalificationIndicator />
      </div>
    </div>
  )
}

export default ProfileDataDashboard
