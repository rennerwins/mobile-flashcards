import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { addCardToDeck } from '../../utils/api'
import AppTextInput from '../Base/AppTextInput'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white } from '../../utils/colors'

class NewCardView extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestion = e => {
    this.setState(() => ({ question: e }))
  }

  handleAnswer = e => {
    this.setState(() => ({ answer: e }))
  }

  handleSubmit = () => {
    const { title } = this.props.navigation.state.params
    const card = this.state
    addCardToDeck(title, card)
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ marginBottom: 40 }}>
          <AppTextInput
            placeholder="What is the question?"
            change={this.handleQuestion}
            value={question}
          />
        </View>

        <View style={{ marginBottom: 40 }}>
          <AppTextInput
            placeholder="What is the answer?"
            change={this.handleAnswer}
            value={answer}
          />
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
  }
})

export default NewCardView
