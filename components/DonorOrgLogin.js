import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoginCreator from './LoginCreator';

class DonorOrgPage extends React.Component {
  static navigationOptions = {
    title: 'DonorOrgLogin'
  }

  render () {
    return (
      <View>
        <Text style={styles.text}>THIS THE DONOR ORG LOGIN</Text>
      </View>
    )
  }
}

export default DonorOrgLogin = LoginCreator(DonorOrgPage);

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }   
});
 