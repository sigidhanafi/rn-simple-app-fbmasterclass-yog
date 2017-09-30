import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

class LoginScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Yuk mari belajar React Native bersama Facebook Developers Circle
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            autoCapitalize={'none'}
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Actions.profileScreen({ type: 'replace' }) }>
            <View>
              <Text style={styles.button}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    marginTop: Platform.OS === 'ios' ? 60 : 54
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formContainer: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    marginBottom: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2196F3',
    padding: 15,
    alignItems: 'center'
  },
  button: {
    color: '#FFFFFF'
  }
});