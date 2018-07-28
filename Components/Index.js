import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import dismissKeyboard from 'dismissKeyboard'
import { addPerson, deletePerson } from '../actions'

class Index extends Component {
  state = {
    inputValue: ''
  }
  addPerson = () => {
    // alert(this.state.inputValue)
    if (this.state.inputValue === '') return
    this.props.dispatchAddPerson({
      name: this.state.inputValue
    })
    this.setState({ inputValue: '' })
  }
  deletePerson = person => {
    this.props.dispatchdeletePerson(person)
  }
  updateInput = inputValue => {
    // alert(this.state.inputValue)
    this.setState({ inputValue })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SignUp Form</Text>
        <TextInput
          ref="first"
          onChangeText={text => this.updateInput(text)}
          onSubmitEditing={event => {
            this.refs.second.focus()
          }}
          style={styles.input}
          value={this.state.inputValue}
          placeholder="Username"
        />

        <TouchableHighlight underlayColor="#ffa012" style={styles.button} onPress={this.addPerson}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableHighlight>
        <Text style={styles.title}>List of Persons</Text>

        {this.props.people.map((person, index) => (
          <View key={index} style={styles.personView}>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Name: {person.name}</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'flex-start' }}>
              <TouchableHighlight underlayColor="#ffa012" style={styles.deleteButton} onPress={() => this.deletePerson(person)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableHighlight>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps(dispatch) {
  // alert(dispatch)
  return {
    dispatchAddPerson: person => dispatch(addPerson(person)),
    dispatchdeletePerson: person => dispatch(deletePerson(person))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
