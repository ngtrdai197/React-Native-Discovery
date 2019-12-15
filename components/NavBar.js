import React from 'react'
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const NavBar = () => {
  return (
    <View style={styles.header}>
      <View>
        <EvilIcons name="location" color="#333" size={30} />
      </View>
      <View>
        <Entypo name="menu" color="#333" size={30} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 0,
    paddingRight: 5,
    paddingLeft: 5,
  },
})

export default NavBar
