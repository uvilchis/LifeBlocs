import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BoneMarrowDonations extends React.Component {
  static navigationOptions = {
    title: 'BoneMarrowDonations'
  }
     
  render () {
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.topButton}>
           <Text style={styles.buttonText}>Donate Bone Marrow</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Track a Bone Marrow Donation</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Confirm a Bone Marrow Donation</Text>
         </TouchableOpacity>
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
  header: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    textDecorationLine: 'underline'
  },
  topButton: {
    marginTop: -100,
    backgroundColor: 'red',
    borderRadius: 3,
    padding:10,
    width: 310,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 3,
    padding:10,
    width: 310,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
});
 