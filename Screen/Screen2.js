import React from 'react'
import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { memo } from 'react';
import { useEffect } from 'react';
const Screen2 = ({image,name,translatY}) => {
  const navigation = useNavigation();
  const ScalAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        scale:interpolate(translatY.value,[0,-50],[1,0.6],Extrapolate.CLAMP)
      }]
    }
  })
  const SongX=useSharedValue(-150)
  useEffect(()=>{
    SongX.value=5
  },[])
const SongNameStyle=useAnimatedStyle(()=>{
  return{
   transform:[{
     translateX:withTiming(SongX.value,{duration:780})
   }]
  }
})
  return (
    <View style={styles.BottomSheet}>
        <Animated.Image
     source={{uri:image}}
     style={[styles.Profile,ScalAnimation]}
        />
         
        <View style={styles.ProfileContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <View style={styles.FollowItem}>
         
      <Text style={styles.Follow}>Follow</Text>
      <Entypo name="plus" style={{marginLeft:-5}} size={24} color="black" />
          </View>
        </View>
        <Animated.Text numberOfLines={8} style={[{padding:20},SongNameStyle]}>In light of the current public health crisis, Justin Bieber announces his rescheduled 2021 World Tour dates below. The 45-date tour has been rerouted and the tour production has been redesigned and will no longer be stopping in stadiums or all markets. 19 new arena dates have been added. Kehlani and Jaden Smith who were originally scheduled to support the tour will not be appearing on the new dates as new support will be added at a later date.</Animated.Text>
       
        <Pressable 
        >
          <LinearGradient
          colors={['#FC466B','#FFAFBD',]}
          style={{height:50,width:260,borderRadius:40,alignSelf:'center',position:'relative'}}
          start={[0, 0]}
           end={[1, 0]}
          />
          <Text style={styles.Button}>Trac List</Text>
         
        </Pressable>
       
    </View>
  )
}

export default memo(Screen2)

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%",
    backgroundColor:'white',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  
    
  },
    BottomSheet:{
      width:"100%",
      height:"100%",
      backgroundColor:'#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  
    },
    Caption:{
      fontSize:23,
      fontWeight:"bold",
      paddingHorizontal:10,
      paddingVertical:20
    },
    Profile:{
      width:80,
      height:80,
      borderRadius:16,
      top:-40,
      alignSelf:'center'
    },
    Follow:{
      padding:10,
    
      fontSize:15,
      fontWeight:"bold",  
    },
    ProfileContainer:{
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      top:-25
    },
    profileName:{
      fontSize:20,
      fontWeight:"900",
      marginRight:10
    },
    background:{
      ...StyleSheet.absoluteFillObject,
      height:45,
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  
    },
    FollowItem:{
      alignItems:'center',
      flexDirection:'row',
      borderWidth:2,
      borderColor:"black",
      width:100,
      borderRadius:40,
      marginLeft:10,
      height:45
    },
    Button:{
      position:'absolute',
      alignSelf:'center',
      top:10,
      color:'white',
      fontSize:20
    }
 
})
