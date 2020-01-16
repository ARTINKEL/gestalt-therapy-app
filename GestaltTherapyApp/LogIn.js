import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Keyboard, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LogIn extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        userID: '',
        password:'' 
      }
      this.handleIDChange = this.handleIDChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


      
    handleIDChange(userID) {
      this.setState({ userID });
    }

    handlePasswordChange(password) {
      this.setState({ password });
    }

    handleSubmit() {
      Alert.alert('Login information received', 'User ID: ' + this.state.userID + '\n' + 'Password: ' + this.state.password)
      this.props.navigation.navigate('MyAssignments')
    }

    // this function handles log ins by contacting the server and matching user id and password
    UserLoginFunction = () => {
      const { UserID } = this.state;
      const { UserPassword } = this.state;

      fetch('https://127.0.0.1/scripts/UserLogin.php', {
        method: 'POST',
        headers: {
          //'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id : UserID,
          password: UserPassword
        })
      }).then((response) => response.json())
          .then((responseJson) => {
            if (responseJson === 'Data Matched') {
              this.handleSubmit()
            } else {
              Alert.alert(responseJson)
            }
          }).catch((error) => {
            console.error(error);
          })
    }

    static navigationOptions = {
      title: 'My Assignments',
      header: (
        <View style={{backgroundColor:'#7FE5F0'}}/>
        ),
      headerStyle: {
        backgroundColor: 'transparent',
      },
    };

    render() {
        return (
            <View style={styles.screen}>
              <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={0}>
	            <ScrollView>
                {/*Title Text*/}
                <View style={styles.head}>
                    <Text style={{backgroundColor:'#C8F4F9', width:200, fontSize:32}}>Working Title</Text>
                </View>
                <View style={styles.container}>

                    {/*Welcome Back text*/}
                    <Text style={{textAlign:'center', fontSize:20, marginBottom:20}}>Welcome Back</Text>

                    {/*ID Number text*/}
                    <Text style={{fontSize:16, marginLeft:15}}>ID Number</Text>
                    <TextInput 
                      style={{alignSelf:'center', textAlign:'left', textAlignVertical:'top', margin:10, padding:10, paddingTop:8, width:250, height:40, borderColor:'#000000', borderWidth:1, borderRadius:10,}} 
                      editable 
                      maxLength={4} 
                      placeholder={'Your 4-digit code'}
                      value={this.state.userID}
                      onChangeText={this.handleIDChange}
                    />

                    {/*Password text*/}
                    <Text style={{fontSize:16, marginLeft:15}}>Password</Text>
                    <TextInput 
                      style={{alignSelf:'center', textAlign:'left', textAlignVertical:'top', margin:10, padding:10, paddingTop:8, width:250, height:40, borderColor:'#000000', borderWidth:1, borderRadius:10,}} 
                      editable 
                      secureTextEntry={true}
                      maxLength={4} 
                      placeholder={'Your 4-digit code'}
                      value={this.state.password}
                      onChangeText={this.handlePasswordChange}
                    />

                    <View style={{alignSelf:'center', width:150}}>
                        {/*Submit Button*/}
                        <TouchableOpacity 
                          onPress={this.UserLoginFunction}
                        >
                        <Text style={{ fontFamily:'serif', fontSize: 16, backgroundColor:'#F83839', color:'#FFFFFF', alignSelf:'center', textAlign:'center', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>Log In</Text>
                        </TouchableOpacity>
                        
                        {/*Build Button*/}
                        <TouchableOpacity 
                          onPress={() => this.props.navigation.navigate('AssignmentBuilder')}
                          >
                          <Text style={{ fontFamily:'serif', fontSize: 16, backgroundColor:'#F83839', color:'#FFFFFF', alignSelf:'center', textAlign:'center', marginLeft:20, marginRight:20, marginTop:10, borderRadius:10, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight:10}}>Build</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </ScrollView>
              </KeyboardAvoidingView>
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
      height:325,
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