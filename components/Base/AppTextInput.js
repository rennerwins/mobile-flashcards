import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import { blue } from '../../utils/colors'

const Input = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 4px;
`

function AppTextInput({ placeholder }) {
  return <Input underlineColorAndroid={blue} placeholder={placeholder} selectionColor={blue} borderColor={blue} />
}

export default AppTextInput
