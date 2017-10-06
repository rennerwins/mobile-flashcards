import React from 'react'
import { View, StyleSheet } from 'react-native'
import { lightGray } from '../../utils/colors'

function ViewWrapper({ children }) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray
  }
})

export default ViewWrapper
