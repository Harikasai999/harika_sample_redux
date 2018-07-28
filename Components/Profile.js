import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableHighlight, ListView } from 'react-native'
import styles from './styles'
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
var Dimensions = require('Dimensions')
var windowSize = Dimensions.get('window')
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfPersons: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      profile: [],
      spinner: true
    }
  }
  back() {
    NavigationActions.pop()
  }
  // componentWillReceiveProps(nextProps) {
  //   alert('componentWillReceiveProps LoginData: ' + JSON.stringify(nextProps))
  //   //   // alert('dsjfdsjkfh')
  //   if (nextProps.people[0] != undefined) {
  //     this.setState({
  //       spinner: false,
  //       profile: nextProps.people[0]
  //     })
  //   } else {
  //     this.setState({
  //       spinner: false
  //     })
  //     alert('No data')
  //   }
  // }
  componentWillMount() {
    // alert('ererrtrtertrt')
    // alert(JSON.stringify(this.props.people))
    this.setState({
      spinner: false,
      listOfPersons: this.state.listOfPersons.cloneWithRows(array)
    })
  }
  dataRow(list) {
    return (
      <View style={{ flex: 1, height: 50, borderBottomColor: 'grey', width: windowSize.width, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{list.name}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.spinner == true ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="black" thickness={10} style={styles.activityIndicator} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.profileView}>
              <Text style={styles.profileText}>Email: {this.props.people.email}</Text>
              <Text style={styles.profileText}>Password: {this.props.people.password}</Text>
              <Text style={styles.profileText}>Device-Token: {this.props.people.deviceToken}</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <TouchableHighlight underlayColor="#ffa012" style={styles.button} onPress={this.back}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={{ flex: 0.6 }}>
              <ListView dataSource={this.state.listOfPersons} renderRow={this.dataRow.bind(this)} />
            </View>
          </View>
        )}
      </View>
    )
  }
}

function mapStateToProps(state) {
  alert('LoginData: ' + JSON.stringify(state))
  return {
    people: state.people.people
    // listOfPeople: state.people.listOfPeople
  }
}
const mapDispatchToProps = dispatch => {
  // alert(dispatch)
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
