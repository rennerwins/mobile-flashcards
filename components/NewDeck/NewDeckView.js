import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { createNewTitle, createDeck } from '../../actions'
import AppTextInput from '../Base/AppTextInput'
import AppAndroidButton from '../Base/AppAndroidButton'
import { blue, white } from '../../utils/colors'

// TODO: Validate duplicate title

class NewDeckView extends Component {
  state = {
    title: '',
    error: false
  }

  handleSubmit = () => {
    const { title } = this.state

    if (title !== '') {
      this.props.createDeck(title)
      this.setState(() => ({ title: '', error: false }))
      this.toDeck(title)
      Keyboard.dismiss()
    } else {
      console.log('title is empty')
      this.setState(() => ({ error: true }))
    }
  }

  handleTitle = e => {
    this.setState(() => ({
      title: e,
      error: false
    }))
  }

  toDeck = title => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'IndividualDeckView',
        params: { id: title }
      })
    )
  }

  render() {
    const { title, error } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <AppTextInput
          placeholder={error ? 'Please fill in the deck title' : 'Deck Title'}
          change={this.handleTitle}
          value={title}
          error={error}
        />

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <AppAndroidButton
            press={this.handleSubmit}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Create Deck"
          />
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
  }
})

export default connect(null, { createNewTitle, createDeck })(NewDeckView)
