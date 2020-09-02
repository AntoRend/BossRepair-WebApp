import React from 'react'
// import logo from './logo.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'

// Pages
import Home from './Pages/Home'
import Register from './Pages/RegisterUser'
import RequestConsult from './Pages/RequestConsultUser'
import RequestConsultTwo from './Pages/RequestConsultUserTwo'
import RequestConsultRepairman from './Pages/RequestConsultRepairman'
import RepairmanView from './Pages/DashboardRepairman'
import UserView from './Pages/DashboardUser'

// Mau
import RegisterRepair from './Pages/RegisterRepair'
import RepairViewsC from './Pages/RepairViewsC'
import RepairUserView from './Pages/RepairUserView'
import RepairViews from './Pages/RepairViews'

import RepairmanProfile from './Pages/Repairman/profile'
import CustomerPosts from './Pages/Repairman/customerPosts'
import PostDetails from './Pages/Repairman/postDetails'
import Quote from './Pages/Repairman/quote'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userIsLoggedIn: false,
      userRole: ''
    }
  }

  componentDidMount () {
    const role = localStorage.getItem('userRole')
    // .length
    if (localStorage.length !== 0) {
      this.setState({
        userIsLoggedIn: true,
        userRole: role
      })
    }
  }

  render () {
    const { userIsLoggedIn, userRole } = this.state
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/registro' component={Register} />
            <Route exact path='/registro-reparador' component={RegisterRepair} />
            <Route exact path='/solicitud-reparacion' component={RequestConsult} />
            <Route exact path='/consulta-reparacion' component={RequestConsultTwo} />
            <Route exact path='/solicitud-reparacion-reparador' component={RequestConsultRepairman} />
            <Route exact path='/dashboard' component={UserView} />
            <Route exact path='/dashboard-repair' component={RepairmanView} />
            <Route exact path='/categorias' component={RepairViewsC} />
            <Route exact path='/reparador' component={RepairUserView} />
            <Route exact path='/dashboard-repair' component={RepairViews} />
            <Route exact path='/reparador' component={RepairmanProfile} />
            <Route exact path='/reparador/posts' component={CustomerPosts} />
            <Route exact path='/reparador/posts/id' component={PostDetails} />
            <Route exact path='/reparador/cotizacion/id' component={Quote} />
          </Switch>
          <br />
          <Footer />
        </div>
      </Router>
    )
  }
}
