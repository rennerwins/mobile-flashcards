import { TextInput, StyleSheet, Platform } from 'react-native'
import React from 'react'

import { blue, red, gray } from '../../utils/colors'

const AppTextInput = ({ placeholder, change, value, error }) => {
  return (
    <TextInput
      underlineColorAndroid={error ? red : blue}
      placeholder={placeholder}
      selectionColor={blue}
      borderColor={blue}
      onChangeText={change}
      style={Platform.OS === 'ios' ? styles.iosInput : styles.androidInput}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  iosInput: {
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 18,
    borderBottomColor: gray,
    borderBottomWidth: 1
  },
  androidInput: {
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 18
  }
})

export default AppTextInput
