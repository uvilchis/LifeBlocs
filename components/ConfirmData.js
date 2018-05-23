import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ConfirmData extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>CONFIRM {this.props.type} INFO</Text>
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
  