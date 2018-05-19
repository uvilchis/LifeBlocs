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
        <Text style={styles.text}>DONOR ORGANIZATION LOGIN</Text>
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
          <Text style={styles.buttonText}>L O G I N</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DonorOrgLogin = LoginCreator(DonorOrgPage);

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 10,
    padding: 10
  }
});
 