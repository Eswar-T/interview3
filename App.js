/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Image,TouchableOpacity,
  StatusBar,FlatList
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Images from './src/Images';
import Quotes from './src/Quotes'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SpalshScreen from 'react-native-splash-screen'
import SplashScreen from 'react-native-splash-screen';


const stack = createStackNavigator({
   Images:{
     screen: Images,
   },
   Quotes:{
     screen: Quotes
   }
},
   {
    defaultNavigationOptions:{
      headerShown:false
    },
     initialRouteName: 'Images'
   })


   const AppStack = createAppContainer(stack)

   const App = () => {
    
   useEffect(() => {
      SplashScreen.hide()
    },[]);
    
      return (
              <AppStack />
      );
    }
  
  
  export default App;   

