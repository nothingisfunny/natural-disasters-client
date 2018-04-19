import React, {Component} from 'react'


function formatDate(string){
  const date = new Date(string)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}


export default class Dashboard extends Component{


  render(){
   
    const disaster_types = this.props.disaster_types.map((disaster)=>{
      return(
            <p className="dropdown-item filterDisaster" onClick={(e)=>this.props.handleOnClick(e)}>{disaster.name}</p>
        )
    })

     const years = this.props.disasters.map((disaster)=>{
      return(
            <p className="dropdown-item filterYear" onClick={(e)=>this.props.handleOnClick(e)}>{disaster.fyDeclared}</p>
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
        <div className="row">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Disaster
          </button>
           <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
           <p className="dropdown-item filterDisaster" onClick={(e)=>this.props.handleOnClick(e)}>Clear Filter</p>
          {disaster_types}
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Year
          </button>
           <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
           <p className="dropdown-item filterDisaster" onClick={(e)=>this.props.handleOnClick(e)}>Clear Filter</p>
          {years}
          </div>
        </div>
        </div>
          
        {disasters}

      </div>

    )
  }
}