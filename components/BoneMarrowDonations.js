import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BoneMarrowDonations extends React.Component {
  static navigationOptions = {
    title: 'BoneMarrowDonations'
  }
  
  render () {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>Bone Marrow</Text>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Donate</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Track a Donation</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Confirm a Donation</Text>
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
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: -100,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 9,
    width: 310,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  }
});
   
 