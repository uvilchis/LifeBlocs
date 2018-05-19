import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Camera from './Camera';

export default class QRScan extends React.Component {
  constructor (props) {
    super(props);
  }
  // lets try making the navigation name dependent on props 
  static navigationOptions = {
    title: 'QRScan'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.screenTitle}</Text>
  
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
