import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, gray } from '../../utils/colors'

function Deck({ title, cards }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cards}>{cards} cards</Text>
    </View>
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
    margin: 15
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    backgroundColor: white
  },
  cards: {
    fontSize: 18,
    color: gray
  }
})

export default Deck
