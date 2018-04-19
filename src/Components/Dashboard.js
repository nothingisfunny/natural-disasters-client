import React, {Component} from 'react'


function formatDate(string){
  const date = new Date(string)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}

const yearOptions = [];
for (var i = 1953; i <= 2018; i++) {
   yearOptions.push(i);
}


export default class Dashboard extends Component{


  render(){
   
    const disaster_types = this.props.disaster_types.map((disaster, index)=>{
      return(
          <option key={index}>{disaster.name}</option>
            
        )
    })

     const years = yearOptions.map((year, index)=>{
      return(
          <option key={index}>{year}</option>
        )
    })


    
    const disasters = this.props.disasters.map((disaster, index) => {
      return(
        <div key={index}>
          <p style={{color: "white"}} >
            {disaster.incidentType} in {disaster.state}
          </p>
          <p key={index}>{formatDate(disaster.declarationDate)}</p>
        </div>
        )
    })

    return(

      <div>
        <h4 style={{color: "white"}}>Natural Disasters USA</h4>
        <div className="row">
          <p>Select Disaster</p>
          <select className="custom-select" name="filterDisaster" onChange={(e)=>this.props.handleOnClick(e)}>
            <option selected> </option>
            {disaster_types}
          </select>
          <p>Select a Year</p>
          <select className="custom-select" name="filterYear" onChange={(e)=>this.props.handleOnClick(e)}>
            <option selected> </option>
            {years}
          </select>
        
        </div>
        {disasters}
      </div>

    )
  }
}