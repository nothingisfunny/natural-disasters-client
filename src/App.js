import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import Wrapper from './Components/Wrapper'
import test_data from './test_data.json'
import states from './states.json'
import disaster_icons from './disaster_icons.json'





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      disasters: test_data,
      states: states,
      disaster_icons: disaster_icons
    }
  }

  render() {
    return (
      <div className="App">
      <Wrapper disasters={this.state.disasters} states ={this.state.states} disaster_icons={this.state.disaster_icons}/>

    </div>
    );
  }
}

export default App;
