import React, { Component } from 'react';
import GrandChild from './GrandChild';

export class Child2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
    <div>
        <p>aku anak ke 2</p>
        <p>{this.props.counter}</p>
        <GrandChild forcucu={this.props.counter}/>
    </div>
    )
  }
}

export default Child2;
