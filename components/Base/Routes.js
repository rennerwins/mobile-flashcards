import { TabNavigator, StackNavigator } from 'react-navigation'
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
        tabBarLabel: 'Decks'
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: 'New Deck'
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: blue,
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
      headerTitle: 'Add Card',
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
