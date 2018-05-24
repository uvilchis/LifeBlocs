import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Camera from './Camera';

export default class QRScan extends React.Component {
  constructor (props) {
    super(props);
  }
  // lets try making the navigation name dependent on props 

  render () {
    return (
      <View style={styles.container}>
        <Text>{'OR Scanner Goes Here'}</Text>
        <Camera nextScreen={this.props.nextScreen}/>
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
  },
  
});
