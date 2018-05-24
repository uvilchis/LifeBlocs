import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

class ConfirmData extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reqNum: '.........',
      patientName: '.........',
      patientInfo: '.........',
      address: '.........'
    }
  }
  
  confirm = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.type} DONATION INFO</Text>
        <View style={styles.row}>
          <Text style={styles.info}>Req Number: </Text>
          <TextInput value={this.state.reqNum} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Patient Name: </Text>
          <TextInput value={this.state.patientName} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Patient Info: </Text>
          <TextInput value={this.state.patientInfo} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Address: </Text>
          <TextInput value={this.state.address} style={styles.info}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.confirm('Success')}>
          <Text style={styles.buttonText}>C O N F I R M</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(ConfirmData);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      textDecorationLine: 'underline',
      marginTop: -200
    },
    info: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 30
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start'
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
  });
  