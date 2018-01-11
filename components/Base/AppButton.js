import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'

const IOSButton = ({ backgroundColor, borderColor, color, press, title }) => {
  return (
    <TouchableOpacity onPress={press}>
      <View style={[styles.button, { backgroundColor, borderColor }]}>
        <Text style={[styles.buttonText, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const AndroidButton = ({ backgroundColor, borderColor, color, press, title }) => {
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

const AppButton = props => {
  return (
    <View>{Platform.OS === 'ios' ? <IOSButton {...props} /> : <AndroidButton {...props} />}</View>
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

export default AppButton
