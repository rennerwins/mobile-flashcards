import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PlayingView from './PlayingView'
import ResultView from './ResultView'

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
    const { questionLength, correct, current, showAnswer } = this.state
    if (current !== 0 && showAnswer === prevState.showAnswer) {
      if (prevState.current + 1 === questionLength) {
        this.percentageCalculation(correct, questionLength)
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

  percentageCalculation = (correct, questionLength) => {
    let percent = Math.floor(correct / questionLength * 100)
    this.setState(() => ({ percent }))
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current, correct, percent } = this.state

    return (
      <View style={styles.container}>
        {current + 1 <= deck.questions.length ? (
          <PlayingView
            questions={deck.questions}
            onCorrectAnswered={this.correctAnswered}
            onIncorrectAnswered={this.incorrectAnswered}
            onShowAnswer={this.onShowAnswer}
            {...this.state}
          />
        ) : (
          <ResultView percent={percent} />
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
