import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addNewCard } from '../../actions'
import AppTextInput from '../Base/AppTextInput'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white, red } from '../../utils/colors'

class NewCardView extends Component {
  state = {
    question: '',
    answer: '',
    questionError: false,
    answerError: false
  }

  handleQuestion = e => {
    this.setState(() => ({ question: e, questionError: false }))
  }

  handleAnswer = e => {
    this.setState(() => ({ answer: e, answerError: false }))
  }

  handleSubmit = () => {
    const { title } = this.props.navigation.state.params
    const { question, answer } = this.state

    if (question !== '' && answer !== '') {
      const card = {
        question,
        answer
      }

      this.props.addNewCard(title, card)
      this.setState(() => ({
        question: '',
        answer: '',
        questionError: false,
        answerError: false
      }))
      this.goBack()
      Keyboard.dismiss()
    } else if (question === '') {
      console.log('question error')
      this.setState(() => ({ questionError: true }))
    } else if (answer === '') {
      console.log('answer error')
      this.setState(() => ({ answerError: true }))
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: ''
      })
    )
  }

  render() {
    const { question, answer, questionError, answerError } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ marginBottom: 40 }}>
          <AppTextInput
            placeholder="What is the question?"
            change={this.handleQuestion}
            value={question}
            error={questionError}
          />
          <Text style={styles.errorText}>{questionError && 'Please fill in the question'}</Text>
        </View>

        <View style={{ marginBottom: 40 }}>
          <AppTextInput
            placeholder="What is the answer?"
            change={this.handleAnswer}
            value={answer}
            error={answerError}
          />
          <Text style={styles.errorText}>{answerError && 'Please fill in the answer'}</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <AppAndroidButton
            press={this.handleSubmit}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Submit"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  errorText: {
    color: red,
    paddingLeft: 4
  }
})

export default connect(null, { addNewCard })(NewCardView)
