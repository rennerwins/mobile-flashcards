import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import PlayingView from './PlayingView'
import ResultView from './ResultView'
import {
  percentageCalculation,
  clearLocalNotification,
  setLocalNotification
} from '../../utils/helpers'

class QuizView extends Component {
  state = {
    current: 0,
    correct: 0,
    questionLength: 0,
    percent: 0,
    showAnswer: false
  }

  componentDidMount() {
    const { questions } = this.props.navigation.state.params.deck
    this.setState(() => ({ questionLength: questions.length }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { questionLength, correct, current } = this.state
    if (current !== prevState.current) {
      if (current === questionLength) {
        let percent = percentageCalculation(correct, questionLength)
        this.setState(() => ({ percent }))
        clearLocalNotification().then(setLocalNotification)
      }
    }
  }

  correctAnswered = () => {
    this.setState(state => ({
      current: state.current + 1,
      correct: state.correct + 1,
      showAnswer: false
    }))
  }

  incorrectAnswered = () => {
    this.setState(state => ({
      current: state.current + 1,
      showAnswer: false
    }))
  }

  onShowAnswer = () => {
    this.setState(state => ({ showAnswer: !state.showAnswer }))
  }

  onQuizRestart = () => {
    this.setState(() => ({
      current: 0,
      correct: 0,
      percent: 0,
      showAnswer: false
    }))
  }

  goBackToDeck = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current, correct, percent, questionLength } = this.state

    return (
      <View style={styles.container}>
        {current + 1 <= questionLength ? (
          <PlayingView
            questions={deck.questions}
            onCorrectAnswered={this.correctAnswered}
            onIncorrectAnswered={this.incorrectAnswered}
            onShowAnswer={this.onShowAnswer}
            {...this.state}
          />
        ) : (
          <ResultView
            {...this.state}
            onQuizRestart={this.onQuizRestart}
            goBacktoDeck={this.goBackToDeck}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5
  }
})

export default QuizView
