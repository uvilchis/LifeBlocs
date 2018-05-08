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
         <Text style={styles.header}>I Want To</Text>
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
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50
  }
});
 