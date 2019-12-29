import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import NavBar from './components/NavBar'
import { AppContainer } from './screens'

export default function App() {
  /**
   * @description Separate components
   */
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavBar />
        <AppContainer />
      </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
