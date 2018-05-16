import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default class LogoHeader extends React.Component {
  render () {
    return(
      <Image
        source={require('../images/lifeblocs_logo_white.png')}
        style={{width: 230, height: 230, marginTop: -12}}
      />
    )
  }
}

