import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoginCreator from './LoginCreator';

class DonorPage extends React.Component {
  static navigationOptions = {
    title: 'DonorLogin'
  }

  render () {
    return (
      <View>
        <Text style={styles.text}>THIS THE DONOR LOGIN</Text>
      </View>
    )
  }
}

export default DonorLogin = LoginCreator(DonorPage);

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
});
 