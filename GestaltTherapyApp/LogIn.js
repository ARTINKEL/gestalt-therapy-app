import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LogIn extends Component {

    static navigationOptions = {
        title: 'My Assignments',
        header: (
          <View style={{backgroundColor:'#7FE5F0'}}>
          </View>
        ),
        headerStyle: {
          backgroundColor: 'transparent',
        },
      };
      
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.head}>
                    <Text style={{backgroundColor:'#C8F4F9', width:200, fontSize:32}}>Working Title</Text>
                </View>
                <View style={styles.container}>
                    <Text style={{textAlign:'center', fontSize:20, marginBottom:20}}>Welcome Back</Text>
                    <Text style={{fontSize:16, marginLeft:15}}>ID Number</Text>
                    <TextInput style={{alignSelf:'center', textAlign:'left', textAlignVertical:'top', margin:10, padding:10, paddingTop:8, width:250, height:40, borderColor:'#000000', borderWidth:1, borderRadius:10,}} editable maxLength={4} placeholder={'Your 4-digit code'}></TextInput>
                    <Text style={{fontSize:16, marginLeft:15}}>Password</Text>
                    <TextInput style={{alignSelf:'center', textAlign:'left', textAlignVertical:'top', margin:10, padding:10, paddingTop:8, width:250, height:40, borderColor:'#000000', borderWidth:1, borderRadius:10,}} editable maxLength={4} placeholder={'Your 4-digit code'}></TextInput>
                    <View style={{alignSelf:'center', width:150}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAssignments')}><Text style={{ fontFamily:'serif', fontSize: 16, backgroundColor:'#F83839', color:'#FFFFFF', alignSelf:'center', textAlign:'center', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>Log In</Text></TouchableOpacity>
                    </View>
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
      height:300,
      marginTop:30,
      marginBottom:30,
      marginLeft:30,
      marginRight:30,
      borderRadius:10,
      backgroundColor: '#FFFFFF',
      padding:10
    },
    head: {
        height:125,
        marginTop:75,
        marginBottom:30,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        backgroundColor: '#C8F4F9',
        padding:20
      },
  });