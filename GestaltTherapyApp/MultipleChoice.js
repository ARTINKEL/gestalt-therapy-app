import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class MultipleChoice extends Component {
    
    render(){
        var radio_props = [
            {label: '1', value: 0 },
            {label: '2', value: 1 }
          ];
        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                >
                    <RadioButtonInput
                        onPress={console.log("hi")}
                        borderWidth={1}
                        buttonInnerColor={'#e74c3c'}
                        buttonSize={40}
                        buttonOuterSize={80}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                    />
                </RadioForm>
            </View>
        )
    }
}