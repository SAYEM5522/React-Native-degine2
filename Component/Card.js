import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated,{ Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Screen2 from '../Screen/Screen2';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Card = ({route}) => {
  const navigation = useNavigation();

  const translatY = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translatY.value;
    },
    onActive: (event, ctx) => {
      translatY.value = ctx.startX + event.translationY;
     
    },
    onEnd: (_) => {
      if(translatY.value<-10){
        translatY.value=withSpring(0,{mass:0.1})
      }else if (translatY.value>15){
        translatY.value=withSpring(250)
      }      
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translatY.value,
        },
      ],
    };
  });
  const ImageScale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:(interpolate(translatY.value,[0,-100],[1,1.6],Extrapolate.CLAMP))
        },
      ],
    };
  });
  const IconStyle1=useAnimatedStyle(()=>{
    return{
      transform:[
        {translateY:interpolate(translatY.value,[0,100],[0,38])}
      ]
    }
  })
  const IconStyle2=useAnimatedStyle(()=>{
    return{
      transform:[
        {translateY:interpolate(translatY.value,[0,100],[0,38])}
      ]
    }
  })
  const IconStyle3=useAnimatedStyle(()=>{
    return{
      transform:[
        {translateY:(interpolate(translatY.value,[0,100],[0,38]))}
      ]
    }
  })
 
  return (
    <View style={{backgroundColor:'rgba(0,0,0,0.65)'}}>
       {/* <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.98)',"transparent"]}
        style={styles.gradient}>
        </LinearGradient> */}
        <View>
      <Animated.Image source={{uri:route.params.itemImg}} style={[styles.IMG,ImageScale]} />
     
      </View>
   
      <View style={styles.IconList}>
        <Animated.View style={[styles.Icon,IconStyle1]}>
        <AntDesign style={styles.center} name="hearto" size={30} color="black" />
        </Animated.View>
        <Animated.View style={[styles.Icon,IconStyle2]}>
        <MaterialIcons style={styles.center} name="music-note" onPress={()=>navigation.push("Screen3")}  size={30} color="black" />
        </Animated.View>
        <Animated.View style={[styles.Icon,IconStyle3]}>
        <MaterialIcons style={styles.center2} name="arrow-left" onPress={()=>navigation.push("Screen1")} size={55} color="black" />
        </Animated.View>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler} >
      <Animated.View pointerEvents="box-only" style={[animatedStyle,styles.contain]}>
      <Screen2 image={route.params.itemImg} name={route.params.itemName} translatY={translatY}/>
      </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
Card.sharedElements = route => {

  return [
    {
      id: route.params.itemId,
      animation: 'move',
    },
  ];
};
export default Card

const styles = StyleSheet.create({
  IMG:{
    position:"relative",
    width:"100%",
    height:320,
    resizeMode:'cover'
  },

  contain:{
    top:-120,zIndex:100
  },
  gradient:{
    height:"100%",
    ...StyleSheet.absoluteFillObject
  },
  Icon:{
    backgroundColor:"#1DB954",
    width:65,
    height:65,
    borderRadius:32,
    top:-35,
    marginRight:30,
    marginLeft:30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},

shadowOpacity: 1,
shadowRadius: 3.84,
  },
  IconList:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center'
    
  },
  arrow:{
    position:"absolute",
    top:20,
    left:10
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:"center",
    top:20
  },
  center2:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:"center",
    top:5
  }
})
