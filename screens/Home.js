import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWeather, getWeathers } from '../store/actions'
import Item from '../components/Item'

function Home(props) {
  const { weatherState, navigation } = props
  const [value, onChangeText] = useState('')
  const [locationWeather, setLocationWeather] = useState('')
  useEffect(() => {
    props.getWeathers()
  }, [])
  const items = weatherState.weathers
  const loaded = weatherState.weathers.length > 0
  const renderItems = () => {
    return loaded ? (
      <SafeAreaView>
        <FlatList
          data={items}
          horizontal={true}
          renderItem={({ item }) => (
            <Item
              app_max_temp={item.app_max_temp}
              datetime={item.datetime}
              icon={item.weather.icon}
              navigation={navigation}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index + ''}
        />
      </SafeAreaView>
    ) : (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Loading ...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#303f9f', '#1e88e5', '#03a9f4']} //
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.location}>
          {locationWeather ? locationWeather : 'Ho chi minh'}, VietNam
        </Text>

        <Text style={styles.times}>{new Date().toDateString()}</Text>

        <View style={styles.icon}>
          <Image
            style={{
              width: 120,
              height: 100,
            }}
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${items[0] &&
                items[0].weather.icon}.png`,
            }}
          />
          <Text style={styles.temperature}>
            {items[0] && items[0].app_max_temp} độ
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.temperature}>
            {items[0] && items[0].weather.description}
          </Text>
        </View>

        <View style={styles.timeToday}>
          <Text style={styles.textTimeToday}>Today</Text>
        </View>
        {renderItems()}
        {/* <View>
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff"
            placeholder="Enter city name"
            value={value}
            onChangeText={text => onChangeText(text)}
          />
          <Button
            title="Search"
            onPress={() => {
              searchWeather(props, value)
            }}
          />
        </View> */}
      </LinearGradient>
    </View>
  )
}

function searchWeather(props, cityName) {
  props.getWeathers(cityName)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  location: {
    color: '#fff',
    padding: 10,
    fontSize: 24,
  },
  times: {
    color: '#e7e7e7',
    fontSize: 17,
    marginLeft: 10,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  btnSubmit: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  timeToday: {
    marginTop: 15,
    marginLeft: 15,
  },
  textTimeToday: {
    color: '#fff',
    fontSize: 23,
  },
})
const mapStateToProps = state => ({
  weatherState: state.weatherReducer,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getWeathers: getWeathers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
