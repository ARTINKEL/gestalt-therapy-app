import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';
import { Linking } from 'expo';

export default class ArticleQuestion extends Component {
    render(){
        return(
            <View>
                <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:16, padding:5}}>Please read this important article.</Text>
                <Text style = {{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:16, padding:5, color:'blue', textDecorationLine:'underline'}} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZZ5LpwO-An4')}>
                    Click here for the imporant article.
                </Text>
            </View>
        );
    }
}