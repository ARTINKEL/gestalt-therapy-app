import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class MyAssignments extends Component {

    static navigationOptions = {
        title: 'My Assignments',
        header: (
          <View style={{backgroundColor:'#7FE5F0'}}>
            <View style={{width:300, height:70, backgroundColor:'#FFFFFF', alignSelf:'center', borderRadius:10, borderTopLeftRadius:0, borderTopRightRadius:0}}>
              <Text style={{fontFamily:'sans-serif-condensed', fontSize:24, textAlign:'center', marginTop:25}}>In Progress</Text>
            </View>
          </View>
        ),
        headerStyle: {
          backgroundColor: 'transparent',
        },
      };

    render() {
      return (
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:16, padding:5}}>1. How did you feel about today's session?</Text>
            <TextInput style={{alignSelf:'center', width:250, height:100, borderColor:'#000000', borderWidth:1}} editable multiline numberOfLines={4} placeholder={'Enter answer here'}></TextInput>
          </View>
        </View>
      );
    }
}

  

  const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#7FE5F0',
      flex:1,
    },
    container: {
      height:500,
      marginTop:30,
      marginBottom:30,
      marginLeft:30,
      marginRight:30,
      borderRadius:10,
      backgroundColor: '#FFFFFF',
    },
  });