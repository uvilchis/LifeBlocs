import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
export default class DonorOrgHome extends React.Component {
  static navigationOptions = {
    title: 'DonorOrgHome'
  }
  
  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select Donation Type</Text>
        <TouchableOpacity onPress={() => this.navigateToScreen('BloodDonorOrg')} style={styles.button}>
          <Text style={styles.buttonText}>Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('BoneMarrowDonorOrg')} style={styles.button}>
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
})
