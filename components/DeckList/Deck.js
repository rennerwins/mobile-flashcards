import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { white, gray } from '../../utils/colors'

function Deck({ title, questions, press }) {
  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
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
