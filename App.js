import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RoleSelect from './components/RoleSelect';
import DonorLogin from './components/DonorLogin';
import DonorOrgLogin from './components/DonorOrgLogin';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
};

const RootStack = createStackNavigator (
  {
    Home: {
      screen: RoleSelect
    },
    DonorLogin: {
      screen: DonorOrgLogin
    },
    DonorOrgLogin: {
      screen: DonorOrgLogin
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
    },
  }
);


