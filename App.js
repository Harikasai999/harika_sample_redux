import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import MainPage from './Components/Navigation.js'
const link = new HttpLink({ uri: 'http://talents.myappdemo.us/graphql' })
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    )
  }
}

export default App
