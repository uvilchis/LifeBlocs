import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// import { RNCamera } from 'react-native-camera';
import { withNavigation } from 'react-navigation';

class Camera extends React.Component {
  constructor(props){
    super(props);
  }
  
  // takePicture = async () => {
  //   console.log('button click')
  //   if (this.camera) {
  //     const data = await this.camera.takePictureAsync();
  //     console.log(data.uri);
  //   }
  // }
  
  takePicture = (screen) => {
    // all takePicture will do right now is navigate to the next screen in the flow 
    // the next screen will be determined via props 
    this.props.navigation.navigate(screen);
  };

  render () {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={() => this.takePicture(this.props.nextScreen)}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Camera);

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 20
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})