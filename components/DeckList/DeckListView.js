import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Deck from './Deck'
import { lightGray } from '../../utils/colors'
import { getDecks } from '../../utils/api'

class DeckListView extends Component {
  state = {
    deckLists: []
  }

  componentDidMount() {
    getDecks().then(res => {
      const deckLists = JSON.parse(res)
      this.setState(prevState => ({ deckLists: [...prevState.deckLists, deckLists] }))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.deckLists}
          renderItem={({ item }, index) => <Deck key={index} {...item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5
  }
})

export default DeckListView
