import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchAllDeck } from '../../actions'
import Deck from './Deck'
import { lightGray, orange } from '../../utils/colors'
import { clearAll } from '../../utils/api'

class DeckListView extends Component {
  componentDidMount() {
    // clearAll()
    this.props.fetchAllDeck()
  }

  selectDeck = title => {
    this.props.navigation.navigate('IndividualDeckView', { id: title })
  }

  renderItem = ({ item }) => <Deck {...item} press={() => this.selectDeck(item.title)} />

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        {decks.length > 0 ? (
          <FlatList data={decks} renderItem={this.renderItem} keyExtractor={item => item.title} />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 26 }}>Your deck is empty.</Text>
          </View>
        )}
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

const mapStateToProps = decks => {
  return {
    decks: Object.values(decks).map(deck => deck)
  }
}

export default connect(mapStateToProps, { fetchAllDeck })(DeckListView)
