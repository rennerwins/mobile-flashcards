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
import { saveDeckTitle } from '../../utils/api'

class NewDeckView extends Component {
  state = {
    title: ''
  }

  handleSubmit = () => {
    const { title } = this.state

    this.props.createDeck(title)
    // this.props.createNewTitle(title)
    // saveDeckTitle(title)
    this.setState({ title: '' })
    this.toDeck(title)
    Keyboard.dismiss()
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
    const { title } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <AppTextInput
          placeholder="Deck Title"
          change={title => this.setState({ title })}
          value={title}
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
