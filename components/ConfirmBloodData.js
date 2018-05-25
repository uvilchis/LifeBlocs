import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ConfirmData from './ConfirmData'

export default class ConfirmBloodData extends React.Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'ConfirmBloodData'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ConfirmData type={'Blood'}/>
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
  