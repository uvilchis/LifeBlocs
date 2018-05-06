import React from 'react';

export default function LoginCreator (WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
      return <WrappedComponent />
    }
  }
}