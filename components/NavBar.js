import React from 'react'
import { StyleSheet,View, Text, Platform, StatusBar } from 'react-native'

const NavBar = () => {
    return (
        <View style={styles.header}>
            <Text>This is NavBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default NavBar
