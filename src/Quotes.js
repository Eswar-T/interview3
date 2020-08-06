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
           fetch("http://opinionated-quotes-api.gigalixirapp.com/v1/quotes?n=50")
           .then(Response=>Response.json())
           .then(response=> this.setState({ dataSource: response.quotes },()=>console.log(response.quotes,"response")) )
           .catch(error=> console.log("error",error))
  }

  empty = () => {
     console.warn("no more data")
  }
  render(){
  return (
   <View style={{ justifyContent:'center',alignItems:'center' }}>
       <FlatList  data={this.state.dataSource}
                  showsVerticalScrollIndicator={false}
                  initialNumToRender={50}
                  renderItem={({item,index})=> 
                                  
                                   <View style={{ height:'auto',width:'94%',backgroundColor:'#87CEEB',borderRadius:6,marginLeft:10,marginRight:10,padding:10,marginTop:12,marginBottom:10 }}>
                                     <Text>{item.quote}</Text>
                                     </View>
                }
                  keyExtractor={(item,index) => index.toString()} 
                  onEndReached={this.empty} 
                    
                               />
    </View>
  );
  }
};

export default Quotes;
