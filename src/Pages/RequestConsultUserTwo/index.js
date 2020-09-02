import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

import RepairData from '../../Components/RepairData'
import InfoCard from '../../Components/InfoCardConsultView'
import Button from '../../Components/Button'
import EndModal from '../../Components/EndRepairModal'

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
      {/* <InfoCard
        title='Cotización'
      /> */}
      <EndModal data={props.location.data} />
    </Container>
  )
}

export default RequestConsult
