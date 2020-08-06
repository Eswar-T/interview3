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
  Text,
  StatusBar,FlatList
} from 'react-native';



class Quotes extends Component {
  
  constructor(props){
    super(props)
    this.state={
                   dataSource:[]
    }
  }

  componentDidMount =()=>{
           fetch("http://opinionated-quotes-api.gigalixirapp.com/v1/quotes?n=10")
           .then(Response=>Response.json())
           .then(response=> this.setState({ dataSource: response.quotes },()=>console.log(response.quotes,"response")) )
           .catch(error=> console.log("error",error))
  }
  render(){
  return (
   <View style={{ justifyContent:'center',alignItems:'center' }}>
       <FlatList  data={this.state.dataSource}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item})=> 
                                   <View style={{ height:'auto',width:'94%', marginTop:16,backgroundColor:'#87CEEB',borderRadius:6,marginLeft:10,marginRight:10,padding:6 }}>
                                     <Text>{item.quote}</Text>
                                     </View>}
                  keyExtractor={(item,index) => index.toString()}                   />
    </View>
  );
  }
};

export default Quotes;
