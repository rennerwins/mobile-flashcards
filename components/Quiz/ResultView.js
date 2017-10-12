import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white, red, green } from '../../utils/colors'

// TODO: Add header text

// TODO: Display number of corrected answers

// TODO: Add 'Restart Quiz' and 'Back to Deck' buttons

function ResultView({ percent, correct, questionLength, onQuizRestart, goBacktoDeck }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.quizWrapper}>
        <Text style={styles.percentage}>{percent} %</Text>
        <Text style={{ fontSize: 16, paddingVertical: 10, width: 200 }}>
          {correct} / {questionLength}
        </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <AppAndroidButton
          press={onCorrectAnswered}
          backgroundColor={green}
          borderColor={green}
          color={white}
          title="Correct"
        />

        <AppAndroidButton
          press={onIncorrectAnswered}
          backgroundColor={red}
          borderColor={red}
          color={white}
          title="Incorrect"
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
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  }
})

export default ResultView
