import React, { Component } from 'react';

export class GrandChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (<div>
            <p>Aku adalah cucunya</p>
            <p>{this.props.forcucu}</p>
        </div>)
  }
}

export default GrandChild;
