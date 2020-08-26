import React from 'react'

import Banner from './Components/Banner'
import BenefitsList from './Components/BenefitsList'
import BossRepairInfo from './Components/BossRepairInfo'
import UserInfo from './Components/UserInfo'
import RepairInfo from './Components/RepairInfo'
import './Home.css'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userIsLoggedIn: false
    }
  }

  render () {
    return (
      <div>
        <Banner />
        <BenefitsList />
        <BossRepairInfo />
        <UserInfo />
        <RepairInfo />
      </div>
    )
  }
}
