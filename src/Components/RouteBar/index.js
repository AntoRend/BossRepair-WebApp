import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'reactstrap'

const RouteBar = ({ route }) => {
  return (
    <Navbar color='light' light expand='md'>
      <p>{route}</p>
    </Navbar>
  )
}

export default RouteBar
