import React, { Component } from 'react';

export class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  tambah = 1
  
  render() {
    return (
    <div>
        <p>Saya adalah child</p>
        <p>nilai: {this.props.counter}</p>
        <button onClick={()=> this.props.fungsi(this.tambah)}>Klik</button>
    </div>
    )
  }
}

export default Child;
