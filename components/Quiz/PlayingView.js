import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppButton from '../Base/AppButton'
import { blue, white, red, green } from '../../utils/colors'

function Playing({
  current,
  correct,
  questions,
  showAnswer,
  onCorrectAnswered,
  onIncorrectAnswered,
  onShowAnswer
}) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18 }}>
        {current + 1} / {questions.length}
      </Text>

      <View style={styles.quizWrapper}>
        <Text style={styles.questionAndAnswer}>
          {showAnswer ? questions[current].answer : questions[current].question}
        </Text>
        <TouchableOpacity onPress={onShowAnswer}>
          <Text style={[styles.linkText, { color: red }]}>
            {showAnswer ? 'Question' : 'Answer'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <AppButton
          press={onCorrectAnswered}
          backgroundColor={green}
          borderColor={green}
          color={white}
          title="Correct"
        />

        <AppButton
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
  questionAndAnswer: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
    paddingVertical: 10
  }
})

export default Playing
