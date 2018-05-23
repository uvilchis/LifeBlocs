import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import QRScan from './QRScan';

export default class EncodeBloodIdentity extends React.Component {
  static navigationOptions = {
    title: 'EncodeBloodIdentity'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <QRScan nextScreen={'ConfirmBloodData'}/>
      </View>
    ) 
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });