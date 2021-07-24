import React from 'react'
import { memo } from 'react';
import { Image, StyleSheet, Text, View,useWindowDimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
// const {width,height}=useWindowDimensions();

const containerHeight=250;

const Singer = ({item,index}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       
      <Pressable 
      onPress={() => {
        navigation.push("Card",{
          itemId:item.id,
          itemImg:item.img,
          itemTitle:item.title,
          itemName:item.name
        });
      }}
      >
          {/* <SharedElement id={item.id}> */}
        <Image
      source={{uri:item.img}}
      style={styles.image}
      />
      {/* </SharedElement> */}
       
      </Pressable>
   

    </View>
  )
}

export default memo(Singer)

const styles = StyleSheet.create({
  container:{
    height:containerHeight,
    padding:5,
    marginBottom:10
   
  },
  image:{
    width:195,
    height:containerHeight,
    resizeMode:"cover",
    borderRadius:15,
    
  }
})
