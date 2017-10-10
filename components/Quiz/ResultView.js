import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// TODO: Add header text

// TODO: Display number of corrected answers

// TODO: Add 'Restart Quiz' and 'Back to Deck' buttons

function ResultView({ percent }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>{percent} %</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ResultView
