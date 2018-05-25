import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';

class Success extends React.Component {
  constructor(props){
    super(props);
  }

  goHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'DonorOrgHome' })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Data Successfully Added to Ethereum Blockchain</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.goHome()}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Success);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 9,
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