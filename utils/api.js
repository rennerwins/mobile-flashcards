import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_KEY = '@MobileFlashcards:key'

// getDecks: return all of the decks along with their titles, questions, and answers
export const getDecks = () => {
  console.log('get decks')
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
}

// getDeck: take in a single id argument and return the deck associated with that id.
export const getDeck = id => {
  console.log('get a deck', id)
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY).then(
    res => {
      const deckList = JSON.parse(res)
      const deck = deckList[id]
      return deck
    },
    err => console.log('error', err)
  )
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export const saveDeckTitle = title => {
  console.log('save deck')
  const deck = JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  })

  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, deck)
}

// addCardToDeck: take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {
  console.log('add new card to deck', title, card)
  getDeck(title).then(res => {
    let newCard = {
      [title]: {
        questions: res.questions.concat(card)
      }
    }
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(newCard))
  })
}

// clearAll: clear AysncStorage for resetting purpose
export const clearAll = () => {
  console.log('clear all')
  return AsyncStorage.clear()
}
