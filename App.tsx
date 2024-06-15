/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';

class FirstApp extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'pink' , height:'100%'}}>
        <View style={{backgroundColor:'black'}}>
          <Text style={{color:'red'}}>Hello World</Text>
        </View>
        <View >
          <Text style={{backgroundColor:'yellow', color:'black'}}>This is My First React-Native App</Text>
        </View>
        <View>
          <Text style={{backgroundColor:'blue', color:'yellow'}}>The Task is to create 4 Child view in a parent View</Text>
        </View>
        <View>
          <Text style={{backgroundColor:'green', color:'white'}}>This Task is Completed</Text>
        </View>
      </View>
    );
  }
}


export default FirstApp;
