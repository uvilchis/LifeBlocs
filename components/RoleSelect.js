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
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorLogin')}>
           <Text style={styles.roles}>Donor</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorOrgLogin')}>
           <Text style={styles.roles}>Donor Organization</Text>
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
      justifyContent: 'flex-start',

    },
    roles: {
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 50,
      borderRadius: 50,
      padding:10
    },
    title: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 50,
      textDecorationLine: 'underline'
    }
  });

  // add red boxes 
 