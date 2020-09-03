import React from 'react'
import { Container } from 'reactstrap'

import RepairData from '../../Components/RepairData'
import InfoCard from '../../Components/InfoCardConsultView'
// import Button from '../../Components/Button'

import './consultview.css'

const RequestConsult = (props) => {
  const repairData = props.location.data

  return (
    <Container className='consult-view'>
      <div>
        <RepairData
          data={repairData}
        />
        <InfoCard
          title='Cotización'
          data={repairData}
        />
      </div>
    </Container>
  )
}

export default RequestConsult

// <Row>
// <Col className='d-flex'>
//   {cards.map((item, index) => {
//     return (
//       // console.log('hke?')
//       <Card body outline color='secondary' key={index} className='col-6 col-md-3 d-flex card__info__body'>
//         <CardTitle className=''>{item.brandAndModel}</CardTitle>
//         {/* <Button text='Reparación' onClick={handleClick(index)} /> */}
//         <button type='button' className="primary-button" onClick={(e) => handleClick(index)}>Push</button>
//       </Card>
//     )
//   })}
// </Col>
// </Row>
// {renderInfo()}
