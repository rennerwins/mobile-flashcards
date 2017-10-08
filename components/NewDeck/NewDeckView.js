import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { createNewDeck } from '../../actions'
import AppTextInput from '../Base/AppTextInput'
import { blue, white } from '../../utils/colors'
import { saveDeckTitle } from '../../utils/api'

class NewDeckView extends Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const { title } = this.state

    this.props.createNewDeck(title)
    saveDeckTitle(title)

    this.setState({ title: '' })
    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: 'NewDeckView'
      })
    )
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <AppTextInput placeholder="Deck Title" change={title => this.setState({ title })} value={title} />

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
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    width: 160,
    backgroundColor: blue,
    borderRadius: 2
  },
  buttonText: {
    color: white,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10
  }
})

export default connect(null, { createNewDeck })(NewDeckView)
