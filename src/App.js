import React, { Component } from 'react';
import './App.css';
import test_data from './test_data.json'
import states from './states.json'
import disaster_types from './disaster_types.json'
import Dashboard from './Components/Dashboard'
import Map from './Components/Map'

function fetchData(){
  const query = this.createQuery(this.state.filterYear, this.state.filterDisaster)
    if(this.state.filterYear !== "" || this.state.filterDisaster !== ""){
      console.log('fetching')
      fetch(`http://localhost:3000/api/disasters${query}`)
      .then(response => response.json())
      .then(data => {
        const newState = Object.assign({}, this.state)
        newState.disasters = data
        this.setState(newState)
      });
    }
}

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
    this.clearFilters = this.clearFilters.bind(this)
  }

  handleOnClick(e){
    console.log("value selected")
    let newState = {}
    newState[e.target.name] = e.target[e.target.selectedIndex].value
    this.setState(
      newState
    )
  }

  clearFilters(e){
    e.preventDefault()
    this.setState({
      filterYear: "",
      filterDisaster: "",
      disaster: []
    })
  }

  fetchData(){
  const query = this.createQuery(this.state.filterYear, this.state.filterDisaster)
    if(this.state.filterYear !== "" || this.state.filterDisaster !== ""){
      console.log('fetching')
      fetch(`http://localhost:3000/api/disasters${query}`)
      .then(response => response.json())
      .then(data => {
        const newState = Object.assign({}, this.state)
        newState.disasters = data
        this.setState(newState)
      });
    }
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

  componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if (prevState.filterDisaster !== this.state.filterDisaster || prevState.filterYear !== this.state.filterYear ) {
    this.fetchData()
  }
}

  render() {
    
    return (
      <div className="container-fluid" style={{padding: 0}}>
    
        <div className="fixed-top text-center control-panel">
          <Dashboard disasters={this.state.disasters} states={this.state.states} disaster_types={this.state.disaster_types} handleOnClick={this.handleOnClick} filterYear={this.state.filterYear} filterDisaster={this.state.filterDisaster} clearFilters={this.clearFilters}/>
        </div>
    
        <Map disasters={this.state.disasters} states={this.state.states} disaster_types={this.state.disaster_types}/>
            
        
    </div>
    );
  }
}

export default App;



