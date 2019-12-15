import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWeather } from '../store/actions'

function Home(props) {
  const [items, setItems] = useState([
    {
      time: 'time 1',
      temperature: '10',
      id: '1',
      status: 1,
    },
    {
      time: 'time 2',
      temperature: '10',
      id: '2',
      status: 1,
    },
    {
      time: 'time 3',
      temperature: '10',
      id: '3',
      status: 1,
    },
    {
      time: 'time 4',
      temperature: '10',
      id: '4',
      status: 1,
    },
    {
      time: 'time 5',
      temperature: '10',
      id: '5',
      status: 1,
    },
    {
      time: 'time 6',
      temperature: '10',
      id: '6',
      status: 1,
    },
    {
      time: 'time 7',
      temperature: '10',
      id: '7',
      status: 1,
    },
    {
      time: 'time 8',
      temperature: '10',
      id: '8',
      status: 1,
    },
  ])
  const [value, onChangeText] = useState('')
  const [locationWeather, setLocationWeather] = useState({})

  useEffect(() => {
    props.getWeather()
  }, [])

  // if (props.weather) {
  //   setLocationWeather(props.weather)
  //   console.log(`locationWeather: `, locationWeather)
  // }

  return (
    <View style={styles.container}>
      {/* <View style={{ backgroundColor: '#0d47a1', flex: 1 }} /> */}
      <LinearGradient
        colors={['#1565c0', '#039be5', '#03a9f4']} //
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.location}>Madrid, Spain</Text>
        <Text style={styles.times}>Fri 6 December</Text>
        <View style={styles.icon}>
          <Feather name="cloud-drizzle" color="#fff" size={90} />
          <Text style={styles.temperature}>16 độ</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.temperature}>It's Raining now</Text>
        </View>
        <View style={styles.timeToday}>
          <Text style={styles.textTimeToday}>Today</Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={items}
            horizontal={true}
            renderItem={({ item }) => (
              <Item
                time={item.time}
                temperature={item.temperature}
                status={item.status}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <View>
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
        </View>
      </LinearGradient>
    </View>
  )
}

function searchWeather(props, cityName) {
  console.log('searchWeather: ', cityName)
  props.getWeather(cityName)
  console.log('weather return: ', props.weather)
}

function Item({ time, temperature, status }) {
  return (
    <View style={styles.item}>
      <Text>{time}</Text>
      <Text>{status}</Text>
      <Text>{temperature}</Text>
    </View>
  )
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
  item: {
    backgroundColor: '#ed3737',
    fontSize: 17,
    padding: 10,
    marginRight: 10,
  },
})
const mapStateToProps = state => ({
  weather: state.weatherReducer.data,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getWeather: getWeather }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
