import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './Home'
import WeatherDetailsScreen from './Weather-Details'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    WeatherDetails: { screen: WeatherDetailsScreen },
  },
  { headerMode: 'none' },
  {
    initialRouteName: 'Home',
  },
)

export const AppContainer = createAppContainer(AppNavigator)
