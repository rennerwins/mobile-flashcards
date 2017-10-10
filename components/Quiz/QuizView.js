import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PlayingView from './PlayingView'
import ResultView from './ResultView'

// TODO: And 'Show Answer' function

class QuizView extends Component {
  state = {
    current: 0,
    correct: 0,
    questionLength: 0,
    percent: 0
  }

  componentDidMount() {
    const { questions } = this.props.navigation.state.params.deck
    this.setState(() => ({ questionLength: questions.length }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { questionLength, correct } = this.state
    if (prevState.current + 1 === questionLength) {
      this.percentageCalculation(correct, questionLength)
    }
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
