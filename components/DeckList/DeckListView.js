import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Deck from './Deck'
import ViewWrapper from '../Base/ViewWrapper'
import { lightGray } from '../../utils/colors'

class DeckListView extends Component {
  state = {
    decks: [
      { title: 'First deck', cards: 5, key: 'first' },
      { title: 'Second deck', cards: 23, key: 'second' },
      { title: 'Third deck', cards: 99, key: 'third' },
      { title: 'Fourth deck', cards: 51, key: 'fourth' }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.decks}
          renderItem={({ item }) => <Deck key={item.key} {...item} />}
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
