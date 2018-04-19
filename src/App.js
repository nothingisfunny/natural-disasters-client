import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper'
import test_data from './test_data.json'
import states from './states.json'
import disaster_types from './disaster_types.json'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      disasters: test_data,
      states: states,
      disaster_types: disaster_types
    }
  }

  render() {
    return (
      <div className="App">
      <Wrapper disasters={this.state.disasters} states={this.state.states} disaster_types={this.state.disaster_types}/>

    </div>
    );
  }
}

export default App;
