import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue, lightGray, orange } from './utils/colors'
import MainNavigator from './components/Base/Routes'
import AppStatusBar from './components/Base/AppStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
