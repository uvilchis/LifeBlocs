import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DonorLogin extends React.Component {
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

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
});
 