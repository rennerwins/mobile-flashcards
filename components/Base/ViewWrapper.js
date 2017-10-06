import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { lightGray } from '../../utils/colors'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.bgColor};
`

function ViewWrapper({ children }) {
  return <Wrapper bgColor={lightGray}>{children}</Wrapper>
}

export default ViewWrapper
