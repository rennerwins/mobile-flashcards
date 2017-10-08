import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { white, gray } from '../../utils/colors'

function Deck({ title, questions, press }) {
  return (
    <TouchableNativeFeedback onPress={press} background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{questions.length} cards</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 2,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15
  },
  title: {
    fontSize: 26,
    textAlign: 'center'
  },
  cards: {
    fontSize: 18,
    color: gray
  }
})

export default Deck
