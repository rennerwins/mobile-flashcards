import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AppAndroidButton from '../Base/AppAndroidButton'
import { getDeck } from '../../utils/api'
import { orange, white, gray, blue } from '../../utils/colors'

class IndividualDeckView extends Component {
  addNewCard = title => {
    this.props.navigation.navigate('NewCardView', { title })
  }

  render() {
    const { id } = this.props.navigation.state.params
    const { decks } = this.props

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

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, null)(IndividualDeckView)
