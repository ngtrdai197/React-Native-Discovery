import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { eventIconLocation } from '../store/actions'
import { bindActionCreators } from 'redux'

function NavBar(props) {
  const [location, setLocation] = useState(null)
  const { isShowIconLocation, navigation } = props.event

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { longitude, latitude } = position.coords
        setLocation({ longitude, latitude })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  const isIconLocation = isShowIconLocation ? (
    <View>
      <TouchableOpacity onPress={findCoordinates}>
        <EvilIcons
          style={{
            paddingTop: 4,
            paddingBottom: 5,
          }}
          name="location"
          color="#fff"
          size={30}
        />
      </TouchableOpacity>
      <Text> {location && JSON.stringify(location)}</Text>
    </View>
  ) : (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.eventIconLocation(true, null)
          navigation.navigate('Home')
        }}
      >
        <EvilIcons name="chevron-left" color="#fff" size={45} />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.header}>
      {isIconLocation}
      <View>
        <Entypo name="menu" color="#fff" size={30} />
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
    paddingTop: 10,
    paddingBottom: 0,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#303f9f',
  },
})

const mapStateToProps = state => ({
  event: state.eventReducer,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ eventIconLocation: eventIconLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
