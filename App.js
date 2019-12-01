import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import NavBar from './components/NavBar'
import Home from './screens/Home'

export default function App() {
  /**
   * @Description Separate components
   */
  return (
    <Provider store={store}>
      <View>
        <NavBar />
        <Home />
      </View>
    </Provider>
  )
}
