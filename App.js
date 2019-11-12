import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Trains from './components/Trains'
import Settings from './components/Settings'

const tabNavigator = createBottomTabNavigator(
  {
    Home: Trains,
    Settings: Settings,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(tabNavigator)