import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class RoleSelect extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: 'L I F E B L O C S'
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render () {
    return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorLogin')}>
           <Text style={styles.roles}>For Donors</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.navigateToScreen('DonorOrgLogin')}>
           <Text style={styles.roles}>For Donor Organizations</Text>
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
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 50
    }
  });
 