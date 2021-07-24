import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const VideoList = ({item,index}) => {
  return (
    <View style={{left:35,top:30}}>
     
     <Image
     source={{uri:item.img}}
     style={{width:170,height:200,resizeMode:'cover'}}
     />
   
    </View>
  )
}

export default VideoList

const styles = StyleSheet.create({})
