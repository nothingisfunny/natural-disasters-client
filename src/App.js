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
      disasters: [],
      states: states,
      disaster_types: disaster_types,
      filterYear: "",
      filterDisaster: ""
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e){
    let newState = {}
    newState[e.target.className.split(" ")[1]] = e.target.innerText
      this.setState(
        newState
      )
  }
  componentDidMount(){
    fetch("http://localhost:3000/api/disasters")
      .then(response => response.json())
      .then(data => this.setState({ disasters: data}));
  }

  render() {
    return (
      <div className="App">
      <Wrapper disasters={this.state.disasters} states={this.state.states} disaster_types={this.state.disaster_types} handleOnClick={this.handleOnClick}/>

    </div>
    );
  }
}

export default App;
