import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';

export default class ShortAnswer extends Component {
    render(){
        return(
            <View>
                <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:16, padding:5}}>1. How did you feel about today's session?</Text>
                <TextInput style={{alignSelf:'center', textAlign:'left', margin:10, padding:10, paddingTop:8, paddingBottom:8, width:250, height:100, borderColor:'#000000', borderWidth:1}} editable multiline maxLength={250} placeholder={'Enter answer here'}></TextInput>
            </View>
        );
    }
}