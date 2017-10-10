import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white, red, green } from '../../utils/colors'

function Playing({ current, correct, questions, onCorrectAnswered, onIncorrectAnswered }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>
        {current + 1} / {questions.length}
      </Text>

      <View style={styles.quizWrapper}>
        <Text style={styles.questionAndAnswer}>{questions[current].question}</Text>
        <Text style={[styles.linkText, { color: red }]}>Answer</Text>
      </View>

      <View style={styles.answerWrapper}>
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
  container: {
    flex: 1
  },
  quizWrapper: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionAndAnswer: {
    fontSize: 34,
    marginBottom: 10,
    textAlign: 'center'
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200
  },
  answerWrapper: {
    alignItems: 'center'
  }
})

export default Playing
