import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import LoginCreator from './LoginCreator';

class DonorOrgPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      usernameText: 'username',
      passwordText: 'password'
    }
  }

  static navigationOptions = {
    title: 'DonorOrgLogin'
  }

  onPasswordTap = () => {
    
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Donor Organization Login</Text>
        <TextInput 
          value={this.state.usernameText}
          clearTextOnFocus={true}
        />
        <TextInput 
          value={this.state.passwordText}
          clearTextOnFocus={true}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.confirmLogin('DonorOrgHome')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DonorOrgLogin = LoginCreator(DonorOrgPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 9,
    width: 310,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  }
});
 