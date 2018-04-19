import React, {Component} from 'react'
// import ReactMapboxGl, { Popup, Marker, NavigationControl} from "react-mapbox-gl";
import MapGL, {Marker, Popup} from 'react-map-gl';
import Dashboard from './Dashboard'
import Map from './Map'
import CityPin from './CityPin'

class Wrapper extends Component{
  //map amount of incidents by state
 

  render(){

  const stateIncidents = {}

let markers = [];

    this.props.disasters.map((dis) => {
    if(stateIncidents[dis.state]){
      if(!stateIncidents[dis.state][dis.incidentType]){
        stateIncidents[dis.state][dis.incidentType] = 1
      }else{
        stateIncidents[dis.state][dis.incidentType] += 1
      }
    }else{
      stateIncidents[dis.state] = {}
      stateIncidents[dis.state][dis.incidentType] = 1
    }
  }) 


    Object.keys(stateIncidents).map((key) =>{
      //find corresponding state
      let state = this.props.states.find((element)=>{
        if(element.name === key){return element}
      })

      let marker = Object.keys(stateIncidents[key]).map((incident)=>{
        const value = stateIncidents[key][incident]
        //find corresponding icon
        const icon = this.props.disaster_types.find((element)=>{
          if(element.name === incident){return element}
        })
        //return the marker
       return(
          <div>
            <Marker longitude={state.longitude} latitude={state.latitude}>
              <CityPin img={icon.imgUrl}/>
            </Marker>
          </div>
        )


      })

      markers.push(marker)
      
    })



    return(
    <div className="container-fluid">
      <div className="row" style={{minHeight: "100vh" }}>
        <div className="col-2" style={{backgroundColor: "black", overflow: "scroll!important"}}>
          <Dashboard disasters={this.props.disasters} states={this.props.states} disaster_types={this.props.disaster_types} handleOnClick={this.props.handleOnClick}/>

        </div>
        <div className="col-10" style={{backgroundColor: "grey", padding: "0"}}>
          <Map markers={markers}/>
            
          
        </div>
      </div>
    </div>
  )

  }
  
}

export default Wrapper;

