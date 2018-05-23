import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import QRScan from './QRScan';

export default class EncodeBoneMarrowIdentity extends React.Component {
  static navigationOptions = {
    title: 'EncodeBoneMarrowIdentity'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <QRScan nextScreen={'ConfirmBoneMarrowData'} navigation={this.props.navigation}/>
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