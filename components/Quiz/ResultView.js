import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white, red, green } from '../../utils/colors'

function ResultView({ percent, correct, questionLength, onQuizRestart, goBacktoDeck }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.quizWrapper}>
        <Text style={{ fontSize: 36 }}>You have answered</Text>
        <Text style={[styles.percentage, { color: red }]}>{percent} %</Text>
        <Text style={{ fontSize: 36, marginBottom: 20 }}>correct!</Text>

        <Text style={{ fontSize: 16 }}>
          {correct} / {questionLength}
        </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <AppAndroidButton
          press={onQuizRestart}
          backgroundColor={green}
          borderColor={green}
          color={white}
          title="Restart Quiz"
        />

        <AppAndroidButton
          press={goBacktoDeck}
          backgroundColor={blue}
          borderColor={blue}
          color={white}
          title="Back to Deck"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  quizWrapper: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  percentage: {
    width: 500,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default ResultView
