import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { blue, white, lightBlue } from '../../utils/colors'
import DeckListView from '../DeckList/DeckListView'
import NewDeckView from '../NewDeck/NewDeckView'
import IndividualDeckView from '../IndividualDeck/IndividualDeckView'
import NewCardView from '../NewCard/NewCardView'
import QuizView from '../Quiz/QuizView'

const Tabs = TabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ blue }) => (
          <MaterialCommunityIcons name="folder-multiple-outline" size={30} color={blue} />
        )
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ blue }) => (
          <MaterialCommunityIcons name="cards-outline" size={30} color={blue} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: ({ navigation }) => ({
      ...headerStackStyle,
      headerTitle: `${navigation.state.params.id}`
    })
  },
  NewCardView: {
    screen: NewCardView,
    navigationOptions: ({ navigation }) => ({
      ...headerStackStyle,
      headerTitle: 'Add Card'
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      ...headerStackStyle,
      headerTitle: 'Quiz'
    })
  }
})

const headerStackStyle = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  },
  headerTitleStyle: {
    width: 500
  }
}

export default MainNavigator
