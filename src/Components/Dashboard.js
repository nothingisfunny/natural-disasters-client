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
          <option key={index} value={disaster.name}>{disaster.name}</option>
        )
    })

     const years = yearOptions.map((year, index)=>{
      return(
          <option key={index} value={year}>{year}</option>
        )
    })

    return(

      <div>
        <h4 style={{color: "white"}}>Natural Disasters USA</h4>
        <form className="form">
          
            <div className="form-group">
            <label>Select a Disaster</label>
              <div className="form-item">
                <select className="custom-select" value={this.props.filterDisaster} name="filterDisaster" onChange={(e) => this.props.handleOnClick(e)}>
                  <option value=" "></option>
                  {disaster_types}
                </select>
              </div>
              <label>Select a Year</label>
              <div className="form-item">
                <select className="custom-select" value={this.props.filterYear} name="filterYear" onChange={(e) => this.props.handleOnClick(e)}>
                  <option value=" "></option>
                  {years}

                </select> 
              </div>
              <button className="btn btn-primary" onClick={(e)=>this.props.clearFilters(e)}>Clear Filters</button> 
            </div>
          
          </form>
        
      </div>

    )
  }
}