export const ADD_DECK = 'ADD_DECK'

export function addNewDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}
