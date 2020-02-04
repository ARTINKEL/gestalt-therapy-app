import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Alert, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class MyAssignments extends Component {

    static navigationOptions = {
        title: 'My Assignments',
        header: (
          <View style={{backgroundColor:'#7FE5F0'}}>
            <View style={{width:300, height:70, backgroundColor:'#FFFFFF', alignSelf:'center', borderRadius:10, borderTopLeftRadius:0, borderTopRightRadius:0}}>
              <Text style={{fontFamily:'sans-serif-condensed', fontSize:24, textAlign:'center', marginTop:25}}>My Assignments</Text>
            </View>
          </View>
        ),
        headerStyle: {
          backgroundColor: 'transparent',
        },
      };

      constructor(props) {
        super(props);
        this.state = { 
          userID: global.userID,
          assignmentData: []
        }
      }

componentDidMount() {

  return fetch('http://10.2.213.196:80/RetrieveAssignments.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        assignmentData: responseJson,
      }, function() {
        // In this block you can do something with new state.
        console.log(responseJson)
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

    render() {

      const assignment = Object.keys(this.state.assignmentData).map((key) => (
        <TouchableOpacity>
        <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
          {key}
          <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
        </Text>
      </TouchableOpacity>
    ));

      return (
        <View style={styles.screen}>
          <View style={styles.container}>
      
            <ScrollView>

              <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:20, padding:5}}>Recent</Text>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Assignment')}>
                <Text style={{ fontFamily:'serif', fontSize: 16, backgroundColor:'#F83839', color:'#FFFFFF', textAlign:'center', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>Assignment 7</Text>
              </TouchableOpacity>

              <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:20, padding:5, marginTop:30}}>Past</Text>
              <Text style={{textAlign:'center', fontSize:12, padding:5, fontFamily:'serif', fontStyle:'italic'}}>Click to download previous assignments.</Text>

              <View>
                {assignment}
              </View>

            </ScrollView>

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
      padding:20,
      backgroundColor: '#FFFFFF',
    },
  });