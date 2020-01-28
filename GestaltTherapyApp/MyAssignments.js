import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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
          assignments: [],
          userID: global.userID 
        }
      }

      // RetrieveAssignmentsFunction = () => {
      //   fetch('http://10.2.185.147:80/RetrieveAssignments.php', {
      //     method: 'GET',
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       assign: this.state.assignments,
      //       id: this.state.userID
      //     })
      //   }).then((response) => response.json())
      //       .then((responseJson) => {
      //         if (responseJson === 'Data Matched') {
      //           this.handleSubmit()
      //         } else {
      //           Alert.alert(responseJson)
      //           console.log(responseJson)
      //         }
      //       }).catch((error) => {
      //         console.error(error);
      //       })
      // }

    render() {
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

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 6
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 5
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 4
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 3
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 2
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{fontFamily:'serif', fontSize: 16, backgroundColor:'#f5f5f5', color:'#a9a9a9', textAlign:'center', marginLeft:20, marginRight:20, marginTop:20, borderRadius:10, paddingLeft:10, paddingBottom:5, paddingTop:5}}>
                  Assignment 1
                  <Image source={require('./download.png')} style={{height:20, width:20, tintColor:'#a9a9a9'}}/>
                </Text>
              </TouchableOpacity>

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