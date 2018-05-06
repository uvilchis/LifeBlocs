import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class DonorHome extends React.Component {
  static navigationOptions = {
    title: 'DonorHome',
    headerTitle: 'L I F E B L O C S'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          DONOR HOME 
        </Text>
        <Text style={styles.title}>
          I Would like to donate 
        </Text>
        <TouchableOpacity>
          <Text style={styles.title}>
            Blood 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>
            Bone Marrow
          </Text>
        </TouchableOpacity>
      </View>    
    ) 
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    title: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 50
    }
  });
   