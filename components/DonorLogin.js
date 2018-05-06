import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import LoginCreator from './LoginCreator';

class DonorPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      usernameText: 'username',
      passwordText: 'password'
    }
  }

  static navigationOptions = {
    title: 'DonorLogin'
  }
   
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DONOR LOGIN</Text>
        <TextInput 
          value={this.state.usernameText}
          clearTextOnFocus={true}
        />
        <TextInput 
          value={this.state.passwordText}
          clearTextOnFocus={true}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.confirmLogin('DonorHome')}>
          <Text style={styles.buttonText}>L O G I N</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DonorLogin = LoginCreator(DonorPage);

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 20,
    padding: 10
  }
});
 