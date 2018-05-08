import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class DonorHome extends React.Component {
  static navigationOptions = {
    title: 'DonorHome',
    headerTitle: 'L I F E B L O C S'
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.options}>DONOR HOME</Text>
        <Text style={styles.title}>I Want To Donate</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen('BloodDonations')}>
          <Text style={styles.options}>Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('BoneMarrowDonations')}>
          <Text style={styles.options}>Bone Marrow</Text>
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
   