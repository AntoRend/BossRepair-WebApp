import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import Swal from 'sweetalert'

import RepairData from '../../Components/RepairData'
import UpdatesConsultView from '../../Components/UpdatesConsultView'
import Button from '../../Components/Button'
import EndModalRepair from '../../Components/EndRepairModal'

const RequestConsult = (props) => {
  // const [repair, renderInfo] = useState('')
  const repair = props.location.data
  // useEffect(() => {
  //   renderInfo(props.location.data)
  // }, '')

  return (
    <Container>
      <RepairData
        data={repair}
      />
      <UpdatesConsultView
        data={repair}
      />
    </Container>
  )
}

export default RequestConsult
