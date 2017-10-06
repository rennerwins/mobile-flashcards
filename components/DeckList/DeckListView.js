import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
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
      <ViewWrapper>
        <FlatList data={this.state.decks} renderItem={({ item }) => <Deck key={item.key} {...item} />} />
      </ViewWrapper>
    )
  }
}

export default DeckListView
