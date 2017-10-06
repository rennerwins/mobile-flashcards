import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { white, gray } from '../../utils/colors'

const DeckWrapper = styled.View`
  background-color: ${props => props.bgColor};
  height: 200px;
  padding: 30px 20px;
  margin: 15px;
  border-radius: 2px;
  elevation: 5;
  shadow-color: blue;
  justify-content: center;
  align-items: center;
`

const DeckTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  background-color: ${props => props.bgColor};
`

const DeckCardsCount = styled.Text`
  font-size: 18px;
  color: ${props => props.color};
`

function Deck({ title, cards }) {
  return (
    <DeckWrapper bgColor={white}>
      <DeckTitle bgColor={white}>{title}</DeckTitle>
      <DeckCardsCount color={gray}>{cards} cards</DeckCardsCount>
    </DeckWrapper>
  )
}

export default Deck
