import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

export default function Item({ datetime, app_max_temp, icon, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WeatherDetails', { dateTime: datetime })
      }
    >
      <View style={styles.item}>
        <Text style={styles.text}>{formatDate(datetime)}</Text>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: `https://www.weatherbit.io/static/img/icons/${icon}.png`,
          }}
        />
        <Text style={styles.text}>{app_max_temp}</Text>
      </View>
    </TouchableOpacity>
  )
}

const formatDate = date => {
  const array = date.split('-')
  return `${array[2]}-${array[1]}-${array[0]}`
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#26c6da',
    fontSize: 17,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
  },
})
