import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';

export default class AssignmentBuilder extends Component {

    static navigationOptions = {
        title: 'Assignment Builder',
        header: (
          <View style={{backgroundColor:'#7FE5F0'}}>
            <View style={{width:300, height:70, backgroundColor:'#FFFFFF', alignSelf:'center', borderRadius:10, borderTopLeftRadius:0, borderTopRightRadius:0}}>
              <Text style={{fontFamily:'sans-serif-condensed', fontSize:24, textAlign:'center', marginTop:25}}>Assignment Builder</Text>
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
                {/* ID entry box */}
                <View style={styles.idField}>
                    <Text style={{textAlign : 'left', textAlignVertical : 'top', fontSize:16, marginLeft:10}}>ID Number of Patient</Text>
                    <TextInput style={styles.textInput}>Patient ID</TextInput>
                </View>
                {/* Actual builder stuff */}
                <View style={styles.container}>
                    {/* Insert components for questions */}
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
        marginTop:10,
        marginBottom:30,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        padding:20,
        backgroundColor: '#FFFFFF',
    },
    idField: {
        height:125,
        marginTop:20,
        marginBottom:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        padding:20,
        backgroundColor: '#FFFFFF',
      },
      textInput: {
        alignSelf:'center', 
        textAlign:'left', 
        textAlignVertical:'top', 
        margin:10, 
        padding:10, 
        paddingTop:8, 
        width:300, 
        height:40, 
        borderColor:'#000000', 
        borderWidth:1, 
        borderRadius:10,
      }
  });