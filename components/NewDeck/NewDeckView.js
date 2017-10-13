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
import AppButton from '../Base/AppButton'
import { blue, white, red } from '../../utils/colors'

class NewDeckView extends Component {
  state = {
    title: '',
    error: false,
    duplicate: false
  }

  handleSubmit = () => {
    const { title } = this.state
    const { decks } = this.props

    if (title !== '') {
      if (decks[title] === undefined) {
        this.props.createDeck(title)
        this.setState(() => ({ title: '', error: false, duplicate: false }))
        this.toDeck(title)
        Keyboard.dismiss()
      } else {
        this.setState(() => ({ duplicate: true }))
      }
    } else {
      this.setState(() => ({ error: true }))
    }
  }

  handleTitle = e => {
    this.setState(() => ({
      title: e,
      error: false,
      duplicate: false
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
    const { title, error, duplicate } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <AppTextInput
          placeholder="Deck Title"
          change={this.handleTitle}
          value={title}
          error={error || duplicate}
        />
        <Text style={styles.errorText}>
          {error && 'Please fill in the deck title'}
          {duplicate && 'Title already exists'}
        </Text>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <AppButton
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
  },
  errorText: {
    color: red,
    paddingLeft: 4
  }
})

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, { createNewTitle, createDeck })(NewDeckView)
