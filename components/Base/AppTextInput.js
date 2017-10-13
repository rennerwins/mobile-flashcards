import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { blue, red, gray } from '../../utils/colors'

function AppTextInput({ placeholder, change, value, error }) {
  return (
    <TextInput
      underlineColorAndroid={error ? red : blue}
      placeholder={placeholder}
      placeholderTextColor={error ? red : gray}
      selectionColor={blue}
      borderColor={blue}
      onChangeText={change}
      style={styles.textInput}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 18
  }
})

export default AppTextInput
