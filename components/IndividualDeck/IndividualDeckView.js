import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppAndroidButton from '../Base/AppAndroidButton'
import { getDeck } from '../../utils/api'
import { orange, white, gray, blue } from '../../utils/colors'

class IndividualDeckView extends Component {
  state = {
    deck: {},
    ready: false
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params

    getDeck(id).then(deck => this.setState(() => ({ deck, ready: true })))
  }

  addNewCard = title => {
    this.props.navigation.navigate('NewCardView', { title })
  }

  render() {
    const { deck, ready } = this.state

    return (
      <View style={styles.container}>
        {ready === true ? (
          <View style={styles.deckDetail}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cards}>{deck.questions.length} cards</Text>
          </View>
        ) : (
          <Text>Loading</Text>
        )}

        <View style={styles.buttonAction}>
          <AppAndroidButton
            press={() => this.addNewCard(deck.title)}
            backgroundColor={white}
            borderColor={blue}
            color={blue}
            title="Add Card"
          />
          <AppAndroidButton
            press={this.handleSubmit}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Start Quiz"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deckDetail: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  cards: {
    fontSize: 20,
    color: gray
  },
  buttonAction: {
    flex: 0.5,
    alignItems: 'center'
  }
})

export default IndividualDeckView
