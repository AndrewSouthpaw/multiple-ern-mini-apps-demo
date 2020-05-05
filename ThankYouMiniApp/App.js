import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { NavigationApi } from 'react-native-ernnavigation-api'

export default (props) => {
  const onPress = () => {
    NavigationApi
      .requests()
      .navigate('BACK_TO_NATIVE_IOS', { message: "Thank you for using the mini app" })
      // .finish({ message: "Thank you for using the mini app" })
      .catch((reason) => {
        Alert.alert('Navigation failed:', reason)
      })
  }

  return (
    <View style={styles.container}>
      <Button title="Close" onPress={onPress} />
      <Text style={styles.summary}>Order Summary</Text>
      <Text>Order #{props.orderNumber}</Text>
      <Text>Subtotal: {props.subTotal}</Text>
      <Text>Shipping: {props.shipping}</Text>
      <Text>Tax: {props.tax}</Text>
      <Text>Total: {props.total}</Text>
      <Text>Visa ending in {props.cardEnding}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  summary: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
  orderNumber: {
    textAlign: 'center',
  },
})
