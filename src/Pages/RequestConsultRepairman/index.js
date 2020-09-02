import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

import RepairData from '../../Components/RepairData'
import ResponseFormRepairman from '../../Components/ResponseFormRepairman'

const RequestConsult = (props) => {
  const [repair, renderInfo] = useState('')
  const [user, userData] = useState([])
  // console.log(props.location.data)
  useEffect(() => {
    const info = props.location.data
    renderInfo(info)
    fetchData()
    // console.log(props)
  }, '')

  const fetchData = async () => {
    const id = localStorage.getItem('userID')
    const data = await axios.get(`http://localhost:8080/repairmen/${id}`)
    userData(data.data.data.Repairman)
  }

  return (
    <Container>
      <RepairData
        data={repair}
      />
      <ResponseFormRepairman
        data={repair}
        userData={user}
      />
    </Container>
  )
}

export default RequestConsult
