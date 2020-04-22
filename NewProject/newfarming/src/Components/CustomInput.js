import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
function InputComponent(props) {
  return (
    <View style={{ height: 40, borderColor: 'blue', borderWidth: 1, margin: 5, paddingLeft: 50, borderRadius: 30,flexDirection:"row" }} >
      <TextInput style={{paddingLeft:20}}
        placeholder={props.placeholder} placeholderTextColor="blue"  secureTextEntry={props.secured}
      />
    </View>

  )
}
export default InputComponent;
