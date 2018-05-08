import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RoleSelect from './components/RoleSelect';
import DonorLogin from './components/DonorLogin';
import DonorOrgLogin from './components/DonorOrgLogin';
import DonorHome from './components/DonorHome';
import BloodDonations from './components/BloodDonations';
import BoneMarrowDonations from './components/BoneMarrowDonations';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
};

const RootStack = createStackNavigator (
  {
    Home: { screen: RoleSelect },
    DonorLogin: { screen: DonorLogin },
    DonorOrgLogin: { screen: DonorOrgLogin },
    DonorHome: { screen: DonorHome },
    BloodDonations: { screen: BloodDonations },
    BoneMarrowDonations: { screen: BoneMarrowDonations }
  }, 
  { 
    navigationOptions: {
      initialRouteName: 'Home',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


