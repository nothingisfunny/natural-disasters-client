import React, {Component} from 'react'
import test_data from '../test_data.json'
import states from '../states.json'

export default class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      disasters: test_data
    }
  }

  render(){
    const disasters = this.state.disasters.map((disaster, index) => {
      return(<p style={{color: "white"}} key={index}>{disaster.incidentType}</p>)
    })

    return(

      <div>
        <h2 style={{color: "white"}}>DANGER</h2>
        {disasters}
      </div>

    )
  }
}