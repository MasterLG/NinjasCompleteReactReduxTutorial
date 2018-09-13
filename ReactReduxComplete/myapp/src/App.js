import React, { Component } from 'react';
import Ninjas from './Ninjas';
import NinjasClassBased from './NinjasClassBased';
import Ninjasv2 from './Ninjasv2';
import Ninjasv3 from './Ninjasv3';
import AddNinja from './AddNinja'
import './Ninjas.css';

class App extends Component {
  state={
    ninjas:[
      {name:'Levent',age:40,belt:'black',id:1},
      {name:'Demet',age:40,belt:'red',id:2},
      {name:'Gün',age:6,belt:'green',id:3}
    ]
  }
  addNinja=(ninja)=>{
    //console.log(ninja);
    ninja.id = Math.random();
    let ninjas=[...this.state.ninjas, ninja];
    this.setState({
      ninjas:ninjas
    });
  }
  deleteNinja=(id)=>{
    // console.log(id);
    let ninjas=this.state.ninjas.filter(ninja=>{
      return ninja.id!==id
    });
    this.setState({
      ninjas:ninjas
    })

  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps,prevState){//When we have a change of state or props
    console.log('component updated');
    console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
        {/* <h1>My first react app!</h1>
        <p>Welcome :)</p> */}
        {/* <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="Yakasoba" age="28" belt="red"/> */}
        <h3>Func-based</h3>
        <Ninjas ninjas={this.state.ninjas}/>
        <hr/>
        <h3>Class-based</h3>
        <NinjasClassBased ninjas={this.state.ninjas}/>
        <hr/>
        <h3>Func-based v2</h3>
        <Ninjasv2 ninjas={this.state.ninjas}/>
        <hr/>
        <h3>Func-based v3</h3>
        <Ninjasv3 ninjas={this.state.ninjas}/>
        <hr/>
        <h3>Func-based Delete</h3>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <hr/>
        <h3>Add Ninja</h3>
        <AddNinja addNinja={this.addNinja}/>
        <hr/>
        <hr/>
      </div>
    );
  }
}

export default App;
