import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class DonorHome extends React.Component {
  static navigationOptions = {
    title: 'DonorHome'
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>I Want To Donate</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen('BloodDonations')} style={styles.button}>
          <Text style={styles.buttonText}>Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('BoneMarrowDonations')} style={styles.button}> 
          <Text style={styles.buttonText}>Bone Marrow</Text>
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
      fontSize: 20,
      marginTop: -100,
      textDecorationLine: 'underline'
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
    }
  });
   