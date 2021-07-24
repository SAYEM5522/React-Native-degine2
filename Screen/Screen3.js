import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Screen3 = () => {
  return (
    <View style={styles.container}>
    <Text>hello2</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
  container:{
    height:"50%",
    width:"100%",
    backgroundColor:'gray',
    borderTopRightRadius:100,
    // zIndex:100,
    top:-150,
    // ...StyleSheet.absoluteFillObject
  }
})
