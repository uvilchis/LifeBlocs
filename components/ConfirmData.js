import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

class ConfirmData extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reqNum: '.........',
      firstName: '.........',
      middleName: '.........',
      lastName: '.........',
      patientInfo: '.........',
      email: '.........',
      address: '.........',
      ethnicity:'........',
      langaugePreference: '.........'
    }
  }
  
  confirm = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.type} Donation Info</Text>
        <View style={styles.row}>
          <Text style={styles.info}>Donation ID: </Text>
          <TextInput value={this.state.reqNum} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor First Name: </Text>
          <TextInput value={this.state.firstName} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor Middle Name: </Text>
          <TextInput value={this.state.middleName} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor Last Name: </Text>
          <TextInput value={this.state.lastName} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor Email: </Text>
          <TextInput value={this.state.email} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor Phone #: </Text>
          <TextInput value={this.state.patientInfo} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Donor Address: </Text>
          <TextInput value={this.state.address} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Ethnicity: </Text>
          <TextInput value={this.state.ethnicity} style={styles.info}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.info}>Language Preference: </Text>
          <TextInput value={this.state.ethnicity} style={styles.info}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.confirm('Success')}>
          <Text style={styles.buttonText}>Confirm</Text>
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
    fontSize: 30,
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
  

  /*
  bone marrow - and blood 
  donation #, 
  first name, 
  middle name, 
  last name, 
  DOB, 
  sex... 
  email, 
  phone #, 
  language preference...  
  address, 
  city, 
  state, 
  zip
  Ethnicity... 
  for blood just add blood type 
  */

  /* 
  Encode Test Data Should Have
  Bone Marrow: 
  HLA Alleles: HLA-A, HLA-B, HLA-C, and HLA-DRB1 each followed by a blank 
  */