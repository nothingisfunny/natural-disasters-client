import React, {Component} from 'react'


function formatDate(string){
  const date = new Date(string)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}


export default class Dashboard extends Component{



  render(){
    const get_states = this.props.states.map((state)=>{return state.name})
    const states = this.props.states.map((state)=>{
      return(
            <p className="dropdown-item">{state.name}</p>
        )
    })


    
    const disasters = this.props.disasters.map((disaster, index) => {
      return(
        <div>
          <p style={{color: "white"}} key={index}>
            {disaster.incidentType} in {disaster.state}
          </p>
          <p>{formatDate(disaster.declarationDate)}</p>
        </div>
        )
    })

    return(

      <div>
      
        <h4 style={{color: "white"}}>Natural Disasters USA</h4>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
           <div class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
          {states}
          </div>
        </div>
          
        {disasters}

      </div>

    )
  }
}