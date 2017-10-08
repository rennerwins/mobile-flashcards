import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

function AppAndroidButton({ press, backgroundColor, color, title, borderColor }) {
  return (
    <TouchableNativeFeedback
      onPress={press}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={[styles.button, { backgroundColor, borderColor }]}>
        <Text style={[styles.buttonText, { color }]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 12
  }
})

export default AppAndroidButton
