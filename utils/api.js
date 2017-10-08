import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_KEY = '@MobileFlashcards:key'

// getDecks: return all of the decks along with their titles, questions, and answers
export function getDecks() {
  console.log('get decks')
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
}

// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(id) {}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
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
export function addCardToDeck(title, card) {}

export function clearAll() {
  console.log('clear all')
  return AsyncStorage.clear()
}
