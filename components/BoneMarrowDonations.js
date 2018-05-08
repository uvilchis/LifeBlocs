import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BoneMarrowDonations extends React.Component {
  static navigationOptions = {
    title: 'BoneMarrowDonations',
    headerTitle: 'L I F E B L O C S'
  }
  
  render () {
    return (
      <View style={styles.container}>
         <Text style={styles.header}>I Want To</Text>
         <TouchableOpacity>
           <Text style={styles.options}>Donate Bone Marrow</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.options}>Track a Bone Marrow Donation</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.options}>Confirm a Bone Marrow Donation</Text>
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
 