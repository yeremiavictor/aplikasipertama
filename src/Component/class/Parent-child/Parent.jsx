import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0
    }
  }

  beli = (jumlah) => {
    this.setState({
        counter: this.state.counter + jumlah
    })

  }
  
  render() {
    return (
    <div>
        <Child 
            counter={this.state.counter}
            fungsi={this.beli.bind(this)} // bind digunakan untuk menerima data dari child
        />
        <Child2 counter={this.state.counter}/>
    </div>
    )
  }
}

export default Parent;
