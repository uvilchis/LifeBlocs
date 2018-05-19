import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RoleSelect from './components/RoleSelect';
import DonorLogin from './components/DonorLogin';
import DonorOrgLogin from './components/DonorOrgLogin';
import DonorHome from './components/DonorHome';
import BloodDonations from './components/BloodDonations';
import BoneMarrowDonations from './components/BoneMarrowDonations';
import DonorOrgHome from './components/DonorOrgHome';
import BloodDonorOrg from './components/BloodDonorOrg';
import BoneMarrowDonorOrg from './components/BoneMarrowDonorOrg';
import LogoHeader from './components/LogoHeader';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
};

const RootStack = createStackNavigator (
  {
    Home: { 
      screen: RoleSelect,
      navigationOptions: {
        headerBackTitle: null
      }  
    },
    DonorLogin: { screen: DonorLogin },
    DonorOrgLogin: { screen: DonorOrgLogin },
    DonorHome: { 
      screen: DonorHome, 
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    BloodDonations: { screen: BloodDonations },
    BoneMarrowDonations: { screen: BoneMarrowDonations },
    DonorOrgHome: {
      screen: DonorOrgHome,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    BloodDonorOrg: {
      screen: BloodDonorOrg
    },
    BoneMarrowDonorOrg: {
      screen: BoneMarrowDonorOrg
    }
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
      headerTitle: <LogoHeader/>
    },
  }
);


