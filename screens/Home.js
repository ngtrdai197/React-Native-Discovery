import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContent}>
        Open up App.js to start working on your app!
      </Text>
      <View>
        <Text onPress={()=> submitButton()}>Demo for first time runningng ...</Text>
      </View>
      <View style={styles.btnSubmit}>
        <Button title="Change" color="#ed3737" onPress={() => submitButton()} />
      </View>
    </View>
  )
}

function submitButton() {
  alert('button onPress')
  console.log('button onPress')

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleContent: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
  },
  btnSubmit: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export default Home
