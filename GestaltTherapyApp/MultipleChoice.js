import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class MultipleChoice extends Component {
    
    render(){
        var radio_props = [
            {label: '1', value: 0},
            {label: '2', value: 0},
            {label: '3', value: 0},
            {label: '4', value: 0},
            {label: '5', value: 0}
          ];
        state = {
            value:0
        }
        return (
            <View style={{flex:1, alignItems:'center'}}>
                <Text style={{textAlign:'center', fontFamily:'sans-serif-condensed', fontSize:16, padding:5}}>2. On a scale of 1 to 5, how did you feel about today's session?</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onPress={(value) => {this.setState({value:value})}}
                >
                    <RadioButton labelHorizontal={false}>
                        <RadioButtonInput
                            onPress={console.log("hi")}
                            borderWidth={1}
                            buttonInnerColor={'#e74c3c'}
                            buttonSize={40}
                            buttonOuterSize={80}
                            buttonStyle={{}}
                            buttonWrapStyle={{marginLeft: 10}}
                        />
                    </RadioButton>
                </RadioForm>
            </View>
        )
    }
}