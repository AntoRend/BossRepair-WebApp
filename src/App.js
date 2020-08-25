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
import Register from './Pages/Register'
import RequestConsult from './Pages/RequestConsult'

// Mau
import UserView from './Pages/UserView'
import ModalUser from './Pages/ModalUser'
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
      userIsLoggedIn: false
    }
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/registro' component={Register} />
            <Route exact path='/solicitud-reparacion' component={RequestConsult} />
            <Route exact path='/dashboard' component={UserView} />
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
