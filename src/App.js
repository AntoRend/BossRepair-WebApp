import React from 'react'
// import logo from './logo.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import axios from 'axios'

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
import AllUserRepairs from './Pages/AllUserRepairs'

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
      userData: {}
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    // .length
    if (localStorage.length !== 0) {
      this.fetchData()
    }
  }

  async fetchData () {
    const role = localStorage.getItem('userRole')
    const id = localStorage.getItem('userID')
    if (role === 'user') {
      const data = await axios.get(`http://localhost:8080/users/${id}`)
      // console.log(data.data.data.User)
      this.setState({
        userIsLoggedIn: true,
        userData: data.data.data.User
      })
    } else {
      const data = await axios.get(`http://localhost:8080/repairmen/${id}`)
      // console.log(data.data.data.Repairman)
      this.setState({
        userIsLoggedIn: true,
        userData: data.data.data.Repairman
      })
    }
  }

  render () {
    const { userIsLoggedIn, userData } = this.state
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
          </Switch>
          {
            userIsLoggedIn
              ? <Switch>
                <Route
                  exact path='/reparaciones' component={AllUserRepairs}
                />
                <Route
                  exact path='/solicitud-reparacion-reparador' component={RequestConsultRepairman}
                />
                <Route
                  exact path='/dashboard' component={() =>
                    <UserView userData={userData} />}
                />
                <Route
                  exact path='/dashboard-repair' component={() =>
                    <RepairmanView userData={userData} />}
                />
                <Route
                  exact path='/categorias' component={() =>
                    <RepairViewsC userData={userData} />}
                />
                <Route
                  exact path='/reparador' component={() =>
                    <RepairUserView userData={userData} />}
                />
                <Route
                  exact path='/dashboard-repair' component={() =>
                    <RepairViews userData={userData} />}
                />
                <Route
                  exact path='/reparador' component={() =>
                    <RepairmanProfile userData={userData} />}
                />
                <Route
                  exact path='/reparador/posts' component={() =>
                    <CustomerPosts userData={userData} />}
                />
                <Route
                  exact path='/reparador/posts/id' component={() =>
                    <PostDetails userData={userData} />}
                />
                <Route
                  exact path='/reparador/cotizacion/id' component={() =>
                    <Quote userData={userData} />}
                />
                </Switch> : null
          }
          <br />
          <Footer />
        </div>
      </Router>
    )
  }
}
