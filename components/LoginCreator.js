import React from 'react';

export default function LoginCreator (WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    confirmLogin = (screen) => {
      console.log('whooaoaaa', screen)
      this.props.navigation.navigate(screen)
    }
    
    render () {
      return <WrappedComponent confirmLogin={this.confirmLogin}/>
    }
  }
}