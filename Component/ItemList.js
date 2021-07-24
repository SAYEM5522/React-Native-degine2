import React,{memo,useCallback, useEffect} from 'react'
import {  FlatList, StatusBar,StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Item from './Item';


import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import ItemDetails from './ItemDetails';
const HeaderHeight=62;
const PlayerList = () => {

const AnimatedFlatList=Animated.createAnimatedComponent(FlatList);
const translateY=useSharedValue(0);
const onscroll=useAnimatedScrollHandler((event) => {
  translateY.value = event.contentOffset.y;
});
const HeaderStyle=useAnimatedStyle(()=>{
  return{
    opacity:interpolate(translateY.value,[0,130],[0,1])
  }
},[])
  const renderItem=useCallback(({item,index})=>{
    return(
      <ItemDetails item={item} index={index} /> 
    )
  },[]);
  const x=useSharedValue(0);
  
    useEffect(() => {
      x.value=withSpring(1,{stiffness:60})
    }, [])
const animatedStyle = useAnimatedStyle(() => {
  return {
   opacity:withDelay(500,withTiming(x.value)),

  };
});
 
  return (
   
    <View style={styles.container}>
 
   <StatusBar/>
   <View style={styles.Header}>
   <View>
   <Animated.Text style={[styles.Text,animatedStyle]}>M</Animated.Text>
   </View>
      <Animated.Text style={[HeaderStyle,styles.HeaderText]}>Play</Animated.Text>
  
   <View style={styles.HeaderRight}>
   <AntDesign name="search1" size={24} color="black" />
   
     <AntDesign style={{marginLeft:20}} name="appstore-o" size={26} color="black" />
   </View>
   </View>
   <AnimatedFlatList
   data={Item}
   keyExtractor={(item)=>item.id}
   showsVerticalScrollIndicator={false}
   renderItem={renderItem}
   numColumns={2}
   scrollEventThrottle={16}
   onScroll={onscroll}
   />
    </View>
    
  )
}

export default memo(PlayerList);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  Header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'#fff',
    height:HeaderHeight
  },
  HeaderRight:{
    flexDirection:'row',
    alignItems:'center',
  },
  Text:{
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:2,
    borderColor:'black',
    borderWidth:1,
    borderRadius:8,
    fontWeight:"900"
  },

  HeaderText:{
    fontSize:20,
    fontWeight:"bold"
  }
})
