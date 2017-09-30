import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginScreen from './Components/LoginScreen'
import ProfileScreen from './Components/ProfileScreen'
import NewsScreen from './Components/NewsScreen'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial key='loginScreen' component={LoginScreen} title='Login' />
          <Scene key='profileScreen' component={ProfileScreen} title='Profile' />
          <Scene key='newsScreen' component={NewsScreen} title='News' />
        </Scene>
      </Router>
    )
  }
}

export default App