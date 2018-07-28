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
var array = [
  {
    name: 'Kiran'
  },
  {
    name: 'Kishore'
  },
  {
    name: 'Karthik'
  },
  {
    name: 'Karuna'
  },
  {
    name: 'Karini'
  },
  {
    name: 'Kalyan'
  }
]
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      Password: ''
    }
    this.signUp = this.signUp.bind(this)
  }

  handleName = text => {
    this.setState({ name: text })
  }
  handleEmail = text => {
    this.setState({ email: text })
  }
  handlePassword = text => {
    this.setState({ password: text })
  }
  signUp() {
    // alert('name: ' + this.state.name + ' email: ' + this.state.email + ' password: ' + this.state.password)
    // this.props
    //   .signUp({
    //     variables: {
    //       name: this.state.name,
    //       password: this.state.password,
    //       email: this.state.email,
    //       deviceToken: '123456',
    //       loginType: 'customer',
    //       profilePic: 'image'
    //     }
    //   })
    //   .then(({ data }) => {
    // alert(JSON.stringify(data))
    //Storing the registered values using AsyncStorage
    // this.props.dispatchListOfPersons({
    //   password: this.state.password,
    //   email: this.state.email,
    //   deviceToken: '123456',
    //   name: this.state.name
    // })
    this.props.dispatchListOfPersons({
      list: array
    })
    // NavigationActions.Profile()
    NavigationActions.Login()
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="first"
          onChangeText={this.handleName}
          onSubmitEditing={event => {
            this.refs.second.focus()
          }}
          style={styles.input}
          value={this.state.name}
          placeholder="Username"
        />
        <TextInput
          ref="second"
          onChangeText={this.handleEmail}
          onSubmitEditing={event => {
            this.refs.third.focus()
          }}
          style={styles.input}
          value={this.state.email}
          placeholder="Email"
          autoCapitalize={'none'}
        />
        <TextInput
          ref="third"
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

        <TouchableHighlight underlayColor="#ffa012" style={styles.button} onPress={this.signUp}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const SIGN_UP = gql`
  mutation M($email: String!, $name: String!, $deviceToken: String!, $loginType: String!, $profilePic: String!, $password: String!) {
    signUp(email: $email, name: $name, deviceToken: $deviceToken, loginType: $loginType, profilePic: $profilePic, password: $password) {
      error
      message
      email
      password
      name
    }
  }
`
const mapDispatchToProps = dispatch => {
  return {
    dispatchListOfPersons: list => {
      dispatch(listOfPersons(list))
    }
  }
}
function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

const SignUpData = compose(graphql(SIGN_UP, { name: 'signUp' }))(SignUp)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpData)
