import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BloodDonations extends React.Component {
  static navigationOptions = {
    title: 'BloodDonations',
    headerTitle: 'L I F E B L O C S'
  }
  
  render () {
    return (
      <View style={styles.container}>
         <TouchableOpacity>
           <Text style={styles.options}>Donate Blood</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.options}>Track a Blood Donation</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.options}>Confirm a Blood Donation</Text>
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
  header: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    textDecorationLine: 'underline'
  },
  options: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50
  }
});
 
// for the map - make a prototype design 
// have the track and confirm go to a QR code scanning screen 
// put the logo on the banner 

// for im a donor > blood > track > qr code > add a screen here for an example of what the tracking would look like (repeat this for blood and bone marrow for both donor and donor orgs)
// the general gist is that you scan the QR code or enter the numerical info and it gives you the relevant information about that donation 

// try to center the buttons 

// also see if you can get the logo somewhere nice 

// shoot for sunday 

