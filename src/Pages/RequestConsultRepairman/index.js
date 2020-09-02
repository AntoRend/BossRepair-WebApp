import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

import RepairData from '../../Components/RepairData'
import ResponseFormRepairman from '../../Components/ResponseFormRepairman'

const RequestConsult = (props) => {
  const [repair, renderInfo] = useState('')
  // console.log(props.location.data)
  useEffect(() => {
    renderInfo(props.location.data)
  }, '')

  return (
    <Container>
      <RepairData
        data={repair}
      />
      <ResponseFormRepairman
        data={repair} 
      />
    </Container>
  )
}

export default RequestConsult
