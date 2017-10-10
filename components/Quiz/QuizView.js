import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white } from '../../utils/colors'

class QuizView extends Component {
  state = {
    current: 1
  }

  nextQuestion = () => {
    this.setState(state => ({
      current: state.current + 1
    }))
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current } = this.state
    console.log(current)

    return (
      <View style={styles.container}>
        <Text>
          {current} / {deck.questions.length}
        </Text>

        <Text>{deck.questions[current - 1].question}</Text>

        <AppAndroidButton
          press={this.nextQuestion}
          backgroundColor={blue}
          borderColor={blue}
          color={white}
          title="Submit"
        />
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
