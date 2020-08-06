/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Image,TouchableOpacity,
  StatusBar,FlatList
} from 'react-native';



class Images extends Component {

  render(){
    let url1= { uri: "https://picsum.photos/id/237/200/300" }
    let url2= { uri:"https://picsum.photos/200/300?grayscale" }
    let url3= { uri: "https://picsum.photos/seed/picsum/200/300" }
    let url4= { uri: "https://picsum.photos/200/300/?blur" }
    let url5= { uri: "https://picsum.photos/id/1003/367/267" }
    let url6= { uri: "https://picsum.photos/id/1011/367/267" }
    let url7= { uri: "https://picsum.photos/id/1012/367/267" }
    let url8= { uri:"https://picsum.photos/id/1013/367/267" }
    return (
   <View style={{ flex:1 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:25 }}>
           <TouchableOpacity >
                 <Image source={url1} style={{ height:70,width:150 }}/>
           </TouchableOpacity>
           <TouchableOpacity >
                 <Image source={url2} style={{ height:70,width:150 }}/>
           </TouchableOpacity >
        </View>

        <View style={{  flexDirection:"row",justifyContent:'space-evenly',marginTop:25}}>
            <TouchableOpacity >
                   <Image source={url3} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
            <TouchableOpacity >      
                   <Image source={url4} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:25 }}>
            <TouchableOpacity >
                  <Image source={url5} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
            <TouchableOpacity >
                  <Image source={url6} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:25 }}>
            <TouchableOpacity >
                  <Image source={url7} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
            <TouchableOpacity >
                  <Image source={url8} style={{ height:70,width:150 }}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ position:'absolute',bottom:0,height:50,width:'100%',backgroundColor:'black' }}
                          onPress={()=>this.props.navigation.navigate("Quotes")}>
         <Text style={{ textAlign:'center',color:'white',paddingTop:12 }}>Navigate to other screen</Text>
        </TouchableOpacity>
    </View>
  );
  }
};

export default Images;
