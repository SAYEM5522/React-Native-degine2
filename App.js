import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';
import { Easing } from 'react-native-reanimated';
import ItemList from './Component/ItemList';
import Card from './Component/Card';
import Screen1 from './Screen/Screen1';
export default function App() {
  const Stack = createStackNavigator();
  const config= {
    animation:"spring",
    config:{
    stiffness: 1000,
    damping: 100,
    mass: 2,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    }
  }
  const configClose={
    animation:"timing",
    config:{
    duration:100,
    easing:Easing.linear
    }
  }
return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
    options={{
      headerShown:false
    }}
    name="ItemList" component={ItemList} />
        <Stack.Screen 
    options={()=>({
      gestureEnabled : false,
      headerShown:false,
      transitionSpec : {
        open : {animation:'timing', config : {duration:300}},
        close : {animation:'timing', config : {duration:300}}
      },
      cardStyleInterpolator : ({current : {progress}}) => {
          return {
            cardStyle : {
              opacity : progress
            },
          }
      }
    })}
    name="Card" component={Card} />
    <Stack.Screen 
    options={{
      gestureEnabled:true,
      gestureDirection:'vertical',
      transitionSpec:{
        open:config,
        close:configClose
      },
      headerShown:false,
      cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS
    }}
    name="Screen1"
  
    component={Screen1} />
    <Stack.Screen
      options={{
        gestureEnabled:true,
        gestureDirection:'vertical',
        transitionSpec:{
          open:config,
          close:configClose
        },
        headerShown:false,
        cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS
      }}
    name="Screen2" component={Screen2} />
      <Stack.Screen
      options={{
        gestureEnabled:true,
        gestureDirection:'vertical',
        transitionSpec:{
          open:config,
          close:configClose
        },
        headerShown:false,
        cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS
      }}
    name="Screen3" component={Screen3} />

  </Stack.Navigator>
</NavigationContainer>
)
}
