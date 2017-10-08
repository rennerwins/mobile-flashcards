import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue, lightGray } from './utils/colors'
import Tabs from './components/Base/Routes'
import AppStatusBar from './components/Base/AppStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1, backgroundColor: lightGray }}>
          <AppStatusBar backgroundColor={blue} barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
