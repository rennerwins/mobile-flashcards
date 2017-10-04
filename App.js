import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { blue } from './utils/colors'
import Tabs from './components/Base/Routes'
import AppStatusBar from './components/Base/AppStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={blue} barStyle="light-content" />
        <Tabs />
      </View>
    )
  }
}
