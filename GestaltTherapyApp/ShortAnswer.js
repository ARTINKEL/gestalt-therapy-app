import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';

export default class ShortAnswer extends Component {
    render(){
        return(
            <View style={{paddingBottom:20, paddingTop:20}}>
                <Text style={{textAlign:'left', fontFamily:'sans-serif-condensed', fontSize:16, paddingBottom:10, paddingLeft:20}}>1. How did you feel about today's session?</Text>
                <TextInput style={{alignSelf:'center', textAlign:'left', textAlignVertical:'top', margin:10, padding:10, paddingTop:8, width:250, height:100, borderColor:'#000000', borderWidth:1}} editable multiline maxLength={250} placeholder={'Enter answer here'}></TextInput>
            </View>
        );
    }
}