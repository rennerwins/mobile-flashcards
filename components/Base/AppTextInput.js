import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { blue } from '../../utils/colors'

function AppTextInput({ placeholder, change }) {
  return (
    <TextInput
      underlineColorAndroid={blue}
      placeholder={placeholder}
      selectionColor={blue}
      borderColor={blue}
      onChangeText={change}
      style={styles.textInput}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    paddingBottom: 8,
    paddingLeft: 4
  }
})

export default AppTextInput
