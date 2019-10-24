import React, { Component } from 'react';
import * as Font from 'expo-font';
import {StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class MyAssignments extends Component {

    static navigationOptions = {
        title: 'My Assignments',
        headerStyle: {
          
        },
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontSize:24,
            fontWeight: '200',
            //fontFamily: "Alegreya-Regular",
        }
      };

    render() {
      return (
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:20, padding:5}}>Recent</Text>
            <TouchableOpacity><Text style={{backgroundColor:'#F83839', color:'#FFFFFF', textAlign:'left', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>Assignment Four</Text></TouchableOpacity>
            <Text style={{textAlign:'center', fontSize:20, padding:5, marginTop:30}}>Past</Text>
            <Text style={{textAlign:'center', fontSize:12, padding:10, fontStyle:'italic'}}>These assignments have already been submitted but you can download your answers.</Text>
            <TouchableOpacity><Text style={{backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'left', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>Assignment Three</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'left', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>Assignment Two</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'left', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>Assignment One</Text></TouchableOpacity>
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