import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { eventIconLocation, getWeathers } from '../store/actions'

function WeatherDetails(props) {
  useEffect(() => {
    props.eventIconLocation(false, props.navigation)
    props.getWeathers()
  }, [])

  const { weathers } = props.weatherState

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#303f9f', '#1e88e5', '#03a9f4']} //
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 30,
          }}
        >
          Next 7 days
        </Text>
        {/* list item  */}

        {weathers.map((item, index) => (
          <View style={styles.wrapperItem} key={index}>
            <Text style={styles.titleDay}>{formatDate(item.datetime)}</Text>
            <View style={styles.iconTempl}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{
                  uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                }}
              >
                {item.low_temp} / {item.max_temp}
              </Text>
            </View>
          </View>
        ))}
      </LinearGradient>
    </View>
  )
}

const formatDate = date => {
  let date_name = ''
  const newDate = new Date(date).getDay()
  switch (+newDate) {
    case 0:
      date_name = 'Sunday'
      break
    case 1:
      date_name = 'Today'
      break
    case 2:
      date_name = 'Tuesday'
      break
    case 3:
      date_name = 'Wednesday'
      break
    case 4:
      date_name = 'Thursday'
      break
    case 5:
      date_name = 'Friday'
      break
    case 6:
      date_name = 'Saturday'
      break
  }
  return date_name
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
  },
  wrapperItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  titleDay: {
    flex: 1,
    paddingLeft: 30,
    color: '#fff',
    fontSize: 18,
  },
  iconTempl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#fff',
  },
})

const mapStateToProps = state => ({
  weatherState: state.weatherReducer,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { eventIconLocation: eventIconLocation, getWeathers: getWeathers },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails)
