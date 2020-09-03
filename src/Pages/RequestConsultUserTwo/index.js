import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

import RepairData from '../../Components/RepairData'
import UpdatesConsultView from '../../Components/UpdatesConsultView'
import EndModalRepair from '../../Components/EndRepairModal'

const RequestConsult = (props) => {
  const [repair, renderInfo] = useState('')
  console.log(repair)
  useEffect(() => {
    renderInfo(props.location.data)
  }, '')

  return (
    <Container>
      <RepairData
        data={repair}
      />
      {/* <UpdatesConsultView
        data={repair}
      /> */}
      {/* <EndModalRepair
        data={repair}
      /> */}
    </Container>
  )
}

export default RequestConsult
