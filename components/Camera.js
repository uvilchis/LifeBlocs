import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// import { RNCamera } from 'react-native-camera';

export default class Camera extends React.Component {

  // takePicture = async () => {
  //   console.log('button click')
  //   if (this.camera) {
  //     const data = await this.camera.takePictureAsync();
  //     console.log(data.uri);
  //   }
  // }
  
  render () {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={this.takePicture}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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