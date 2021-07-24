import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image, useWindowDimensions,FlatList, ScrollView } from 'react-native'
import data from "../Component/Song"
import { NativeViewGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import VideoList from '../Component/VideoList';
import { useCallback } from 'react';
import { useState } from 'react';


const Screen1 = () => {
  const AnimatedFlatList=Animated.createAnimatedComponent(FlatList);

  const navigation = useNavigation();
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(!open)
  }

const above1=useSharedValue(70);


useEffect(()=>{
  above1.value=125
},[])
const boxStyle1=useAnimatedStyle(()=>{
  return{
    zIndex:1,
    top: withDelay(165,withSpring(-above1.value,{mass:2}))
  }
})
const boxStyle2=useAnimatedStyle(()=>{
  return{
    zIndex:1,
    top: withDelay(180,withSpring(-above1.value,{mass:2}))
  }
})
const boxStyle3=useAnimatedStyle(()=>{
  return{
    zIndex:1,
    top: withDelay(195,withSpring(-above1.value,{mass:2}))
  }
})
const SongX=useSharedValue(-150)
useEffect(()=>{
  SongX.value=20
},[])
const SongNameStyle=useAnimatedStyle(()=>{
  return{
   transform:[{
     translateX:withTiming(SongX.value,{duration:950})
   }]
  }
})
const SingerNameStyle=useAnimatedStyle(()=>{
  return{
   transform:[{
     translateX:withTiming(SongX.value,{duration:1000})
   }]
  }
})
const PlayStyle=useAnimatedStyle(()=>{
  return{
   transform:[{
     translateX:withTiming(SongX.value,{duration:1050})
   }]
  }
})
const BottomSheetY=useSharedValue(0);
useEffect(()=>{
  BottomSheetY.value=(open?-590:0)
},[open])
const SheetStyle=useAnimatedStyle(()=>{
  return{
   transform:[{
     translateY:withTiming(BottomSheetY.value)
   }]
  }
})


const renderItem=useCallback(({item,index})=>{
  return(
    <View style={{left:35,top:30}}>
    <Image
    source={{uri:item.img}}
    style={{width:170,height:200,resizeMode:'cover'}}
    />
   </View>
  // <VideoList item={item} index={index}/>
  )
},[]);

  return (
    <View style={{backgroundColor:'lightgray'}}>
      <Image
     source={{uri:data[0].img}}
     style={styles.IMG}
     />
     <View style={styles.Icon}>
     <AntDesign onPress={()=>navigation.goBack()} name="left" size={24} color="black" />
     <AntDesign name="search1" style={{marginLeft:320}}  size={24} color="black" />
     </View>
     <View style={styles.BoxList}>
     <Animated.View style={[styles.Box,boxStyle1]}>
       <Text style={styles.BoxText}>Like</Text>
       <Text  style={styles.BoxText}>1000</Text>
     </Animated.View>
     <Animated.View style={[styles.Box,boxStyle2]}>
     <Text style={styles.BoxText}>Views</Text>
       <Text  style={styles.BoxText}>5000</Text>
     </Animated.View>
     <Animated.View style={[styles.Box,boxStyle3]}>
     <Text style={styles.BoxText}>Download</Text>
       <Text  style={styles.BoxText}>1200</Text>
     </Animated.View>
     </View>
     <View>
       <Animated.Text style={[styles.SongName,SongNameStyle]}>{data[0].name}</Animated.Text>
       <Animated.Text style={[styles.SingerName,SingerNameStyle]}>{data[0].singer}</Animated.Text>
       <Animated.Text style={[styles.Play,PlayStyle]}>27.12.2020</Animated.Text>
     </View>

     <Animated.View style={[styles.BottomSheet,SheetStyle]}>
        <View style ={styles.line}/>
        <AntDesign name="down" style={styles.Bottomicon} size={30}
        onPress={handleOpen}
        color="white" />  
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
   
    />

     </Animated.View>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  IMG:{
    width:"100%",
    height:470,
    resizeMode:"cover",
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,

    position:'relative'
  },
  BottomSheet:{
    width:"100%",
    height:"100%",
    backgroundColor:'rgba(0,0,0,0.85)',
    top:-15,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    zIndex:1,
    
  },
  line:{
    width:100,
    height:6,
    borderRadius:10,
    backgroundColor:"whitesmoke",
    justifyContent:"center",
    alignSelf:'center',
    top:5
  },
  Icon:{
    flexDirection:'row',
    position:'absolute',
    padding:15,
    alignItems:'center'
  },
  Box:{
    width:85,
    height:80,
    borderRadius:20,
    backgroundColor:'rgba(255,255,255,0.7)',
    top:-80,
    zIndex:-1,
    // opacity:0.5,
    alignItems:'center',
    justifyContent:'center'
  },
  BoxList:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  BoxText:{
    color:'black',
    fontSize:16,
    fontWeight:"bold"
  },
  SongName:{
    color:'black',
    fontSize:31,
    fontWeight:"bold",
    top:-60,
    marginLeft:20
  },
  SingerName:{
    color:'black',
    fontSize:18,
    fontWeight:"bold",
    top:-60,
    marginLeft:20
  },
  Play:{
    color:'black',
    fontSize:17,
    top:-60,
    marginLeft:20,
  }
  ,
  Bottomicon:{
    marginLeft:350
  }
})
