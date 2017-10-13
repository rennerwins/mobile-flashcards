import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AppAndroidButton from '../Base/AppAndroidButton'
import { orange, white, gray, blue, red } from '../../utils/colors'

class IndividualDeckView extends Component {
  state = {
    error: false
  }

  addNewCard = title => {
    this.setState(() => ({ error: false }))
    this.props.navigation.navigate('NewCardView', { title })
  }

  startQuiz = deck => {
    if (deck.questions.length === 0) {
      this.setState(() => ({ error: true }))
    } else {
      this.setState(() => ({ error: false }))
      this.props.navigation.navigate('QuizView', { deck })
    }
  }

  render() {
    const { id } = this.props.navigation.state.params
    const { decks } = this.props
    const { error } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.deckDetail}>
          <Text style={styles.title}>{decks[id].title}</Text>
          <Text style={styles.cards}>{decks[id].questions.length} cards</Text>
        </View>

        <View style={styles.buttonAction}>
          <AppAndroidButton
            press={() => this.addNewCard(decks[id].title)}
            backgroundColor={white}
            borderColor={blue}
            color={blue}
            title="Add Card"
          />
          <AppAndroidButton
            press={() => this.startQuiz(decks[id])}
            backgroundColor={blue}
            borderColor={blue}
            color={white}
            title="Start Quiz"
          />
          <Text style={{ color: red }}>{error && 'Please add at least 1 card.'}</Text>
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

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, null)(IndividualDeckView)
