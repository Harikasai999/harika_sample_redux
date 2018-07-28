import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './Login'
import SignUp from './SignUp'
import Index from './Index'
import Profile from './Profile'
export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.unsubscribe = null
    this.state = {
      user: false,
      loading: true
    }
  }

  render() {
    return (
      <Router>
        <Scene>
          <Scene hideNavBar={true} initial={Index} key="Index" component={Index} />
          <Scene hideNavBar={true} key="SignUp" component={SignUp} />
          <Scene key="Login" component={Login} hideNavBar={true} />
          <Scene hideNavBar={true} key="Profile" component={Profile} />
        </Scene>
      </Router>
    )
  }
}
