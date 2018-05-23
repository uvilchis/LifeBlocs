import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BoneMarrowDonorOrg extends React.Component {
  static navigationOptions = {
    title: 'BoneMarrowDonorOrg'
  }
  
  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bone Marrow</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToScreen('EncodeBoneMarrowIdentity')}>
          <Text style={styles.buttonText}>Withdraw and Encode Identity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recieve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encode Test Data</Text>
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
    width: 310,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center'
  }
})

/*
options 
1. withdraw blood / 2. encode identity to blood 
3. send blood 
4. receive blood
5. encode test data to blood
*/