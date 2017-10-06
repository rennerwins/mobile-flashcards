import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import AppTextInput from '../Base/AppTextInput'
import ViewWrapper from '../Base/ViewWrapper'
import { blue, white } from '../../utils/colors'

class NewDeckView extends Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    console.log('hello')
  }

  render() {
    return (
      <ViewWrapper>
        <View style={styles.container}>
          <Text style={styles.header}>What is the title of your new deck?</Text>
          <AppTextInput placeholder="Deck Title" change={title => this.setState({ title })} value={this.state.title} />

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableNativeFeedback
              onPress={this.handleSubmit}
              background={TouchableNativeFeedback.SelectableBackground()}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <Text>{this.state.title}</Text>
        </View>
      </ViewWrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 100
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    width: 200,
    backgroundColor: blue,
    borderRadius: 2
  },
  buttonText: {
    color: white,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 12
  }
})

export default NewDeckView
