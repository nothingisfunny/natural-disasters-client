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
    console.log("value selected")
    let newState = {}
    newState[e.target.name] = e.target[e.target.selectedIndex].value
      this.setState(
        newState
      )

  }

  createQuery(year = "", disaster = ""){
    let query = ""
    if(year !== "" && disaster !== ""){
      query = `?year=${year}&disaster=${disaster}`
    }else if(year !== ""){
      query = `?year=${year}`
    }else if(disaster !== ""){
      disaster.split(" ").join("%20")
      query = `?disaster=${disaster}`
    }
    return query 
  }

  componentDidMount(){
      console.log("im rerendering")
  }


  render() {
    console.log(this.state.filterYear, this.state.filterDisaster)
    const query = this.createQuery(this.state.filterYear, this.state.filterDisaster)
    if(this.state.filterYear !== "" || this.state.filterDisaster !== ""){
      fetch(`http://localhost:3000/api/disasters${query}`)
      .then(response => response.json())
      .then(data => {
        
        this.setState({ disasters: data})
      });
    }
    return (
      <div className="App">
      <Wrapper disasters={this.state.disasters} states={this.state.states} disaster_types={this.state.disaster_types} handleOnClick={this.handleOnClick}/>

    </div>
    );
  }
}

export default App;
