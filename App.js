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
import EncodeBloodIdentity from './components/EncodeBloodIdentity';
import EncodeBoneMarrowIdentity from './components/EncodeBoneMarrowIdentity';
import ConfirmBloodData from './components/ConfirmBloodData';
import ConfirmBoneMarrowData from './components/ConfirmBoneMarrowData';
import Success from './components/Success';

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
      screen: BloodDonorOrg,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    BoneMarrowDonorOrg: {
      screen: BoneMarrowDonorOrg,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    EncodeBloodIdentity: {
      screen: EncodeBloodIdentity,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    EncodeBoneMarrowIdentity: {
      screen: EncodeBoneMarrowIdentity,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    ConfirmBloodData: {
      screen: ConfirmBloodData,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    ConfirmBoneMarrowData: {
      screen: ConfirmBoneMarrowData,
      navigationOptions: {
        headerBackTitle: null
      } 
    },
    Success: {
      screen: Success
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


