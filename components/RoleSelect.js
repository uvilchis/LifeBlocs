import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class RoleSelect extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render () {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>I am a</Text>
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorLogin')} style={styles.button}>
           <Text style={styles.buttonText}>Donor</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorOrgLogin')} style={styles.button}>
           <Text style={styles.buttonText}>Donor Organization</Text>
         </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'red',
      fontSize: 20,
      marginTop: -100,
      textDecorationLine: 'underline'
    },
    button: {
      backgroundColor: 'red',
      marginTop: 50,
      borderRadius: 3,
      padding:10
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    }
  });

  // add red boxes 
 