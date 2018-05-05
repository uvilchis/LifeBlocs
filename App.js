import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
};

const RootStack = createStackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
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


