import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import dismissKeyboard from 'dismissKeyboard'
import { addPerson, deletePerson, listOfPersons } from '../actions'
import Profile from './Profile'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.signIn = this.signIn.bind(this)
  }

  handleEmail = text => {
    this.setState({ email: text })
  }
  handlePassword = text => {
    this.setState({ password: text })
  }
  signIn() {
    // alert(' email: ' + this.state.email + ' password: ' + this.state.password)
    // this.props
    //   .signIn({
    //     variables: {
    //       password: this.state.password,
    //       email: this.state.email,
    //       deviceToken: '123456'
    //     }
    //   })
    //   .then(({ data }) => {
    // alert(JSON.stringify(data.signIn.message))

    this.props.dispatchAddPerson({
      password: this.state.password,
      email: this.state.email,
      deviceToken: '123456'
    })
    // })
    NavigationActions.Profile()
  }
  back() {
    NavigationActions.pop()
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="first"
          onChangeText={this.handleEmail}
          onSubmitEditing={event => {
            this.refs.second.focus()
          }}
          style={styles.input}
          value={this.state.email}
          placeholder="Email"
          autoCapitalize={'none'}
        />
        <TextInput
          ref="second"
          onChangeText={this.handlePassword}
          onSubmitEditing={event => {
            dismissKeyboard()
          }}
          style={styles.input}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize={'none'}
        />

        <TouchableHighlight underlayColor="#ffa012" style={styles.button} onPress={this.signIn}>
          <Text style={styles.buttonText}>SignIn</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#ffa012" style={styles.button} onPress={this.back}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const SIGN_IN = gql`
  mutation M($email: String!, $deviceToken: String!, $password: String!) {
    signIn(email: $email, deviceToken: $deviceToken, password: $password) {
      error
      message
      email
      password
      deviceToken
    }
  }
`
const mapDispatchToProps = dispatch => {
  // alert(dispatch)
  return {
    dispatchAddPerson: person => {
      dispatch(addPerson(person))
    }
  }
}
function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

const LoginData = compose(graphql(SIGN_IN, { name: 'signIn' }))(Login)
export default connect(mapStateToProps, mapDispatchToProps)(LoginData)
