import React from 'react'

function ProfileDataDashboard () {
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
        <p>email@example.com</p>
        <p>Colonia/Municipio</p>
        <p>Ciudad</p>
        <p>****</p>
      </div>
    </div>
  )
}

export default ProfileDataDashboard
