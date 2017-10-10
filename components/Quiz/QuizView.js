import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white, red, green } from '../../utils/colors'

class QuizView extends Component {
  state = {
    current: 1,
    correct: 0
  }

  correctAnswered = () => {
    this.setState(state => ({
      current: state.current + 1,
      correct: state.correct + 1
    }))
  }

  incorrectAnswered = () => {
    this.setState(state => ({
      current: state.current + 1
    }))
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current, correct } = this.state

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>
          {current} / {deck.questions.length}
        </Text>

        <View style={styles.quizWrapper}>
          <Text style={styles.questionAndAnswer}>{deck.questions[current - 1].question}</Text>
          <Text style={[styles.linkText, { color: red }]}>Answer</Text>
          <Text>{correct}</Text>
        </View>

        <View style={styles.answerWrapper}>
          {current !== deck.questions.length ? (
            <View>
              <AppAndroidButton
                press={this.correctAnswered}
                backgroundColor={green}
                borderColor={green}
                color={white}
                title="Correct"
              />

              <AppAndroidButton
                press={this.incorrectAnswered}
                backgroundColor={red}
                borderColor={red}
                color={white}
                title="Incorrect"
              />
            </View>
          ) : (
            <View>
              <AppAndroidButton
                press={this.incorrectAnswered}
                backgroundColor={red}
                borderColor={red}
                color={white}
                title="Show Result"
              />
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5
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

export default QuizView
