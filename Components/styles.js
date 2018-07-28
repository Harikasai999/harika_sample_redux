import { StyleSheet } from 'react-native'
import React from 'react'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
    padding: 10
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
    marginLeft: 20,
    marginRight: 20
  },
  deleteButton: {
    backgroundColor: '#FA8072',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 3,
    width: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  personView: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileView: {
    flex: 0.2,
    alignItems: 'center'
  },
  profileText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10
  }
})

module.exports = styles
