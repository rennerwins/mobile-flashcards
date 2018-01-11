import { Constants } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import thunk from 'redux-thunk'

import { blue, lightGray, orange } from './utils/colors'
import AppStatusBar from './components/Base/AppStatusBar'
import MainNavigator from './components/Base/Routes'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
