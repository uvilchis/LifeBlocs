import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BloodDonations extends React.Component {
  static navigationOptions = {
    title: 'BloodDonations'
  }
  
  render () {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>Blood</Text>
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
  header: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    textDecorationLine: 'underline'
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -100,
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
 
// for the map - make a prototype design 
// have the track and confirm go to a QR code scanning screen 
// put the logo on the banner 

// for im a donor > blood > track > qr code > add a screen here for an example of what the tracking would look like (repeat this for blood and bone marrow for both donor and donor orgs)
// the general gist is that you scan the QR code or enter the numerical info and it gives you the relevant information about that donation 

// try to center the buttons 

// also see if you can get the logo somewhere nice 

// shoot for sunday 

