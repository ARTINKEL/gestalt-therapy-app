import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShortAnswer from './ShortAnswer.js';
import ArticleQuestion from './ArticleQuestion.js';
import MultipleChoice from './MultipleChoice.js';


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

            <ScrollView contentContainerStyle={{flexGrow:1}}>
              <ShortAnswer/>
              <MultipleChoice/>
              <ArticleQuestion/>
            </ScrollView>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAssignments')}><Text style={{ fontFamily:'serif', fontSize: 16, backgroundColor:'#F83839', color:'#FFFFFF', alignSelf:'center', textAlign:'center', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>Submit</Text></TouchableOpacity>
            
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
      padding:10
    },
  });