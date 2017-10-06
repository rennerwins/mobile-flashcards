import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import AppTextInput from '../Base/AppTextInput'
import ViewWrapper from '../Base/ViewWrapper'

const NewDeckWrapper = styled.View`padding: 30px 20px;`

class NewDeckView extends Component {
  render() {
    return (
      <ViewWrapper>
        <NewDeckWrapper>
          <Text>What is the title of your new deck?</Text>
          <AppTextInput placeholder="Deck Title" />
        </NewDeckWrapper>
      </ViewWrapper>
    )
  }
}

export default NewDeckView
