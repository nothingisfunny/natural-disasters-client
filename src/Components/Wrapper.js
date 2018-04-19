import React, {Component} from 'react'
import ReactMapboxGl, { Popup, Marker} from "react-mapbox-gl";
import Dashboard from './Dashboard'

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1Ijoibm90aGluZ2lzZnVubnkiLCJhIjoiY2pnMnp3Y3F6NjlweDJ3bWQ2ZXdzZnpnZSJ9.hRyi0M7G-rtEMFYOhNTp-g' });



class Wrapper extends Component{
  //map amount of incidents by state
 

  render(){

  const stateIncidents = {}

let markers = [];

if(this.props.disasters.length !== 0){
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
          <Marker coordinates={state.coordinates} anchor="bottom">
            <img src={icon.imgUrl} style={{height: '20px'}}/>
            <p style={{color: "white"}}>{value} incident(s)</p>
          </Marker>
        </div>
      )

    })

    markers.push(marker)

  })

}


    return(
    <div className="container-fluid">
      <div className="row" style={{minHeight: "100vh" }}>
        <div className="col-2" style={{backgroundColor: "black", overflow: "scroll!important"}}>
          <Dashboard disasters={this.props.disasters} states={this.props.states} disaster_types={this.props.disaster_types} handleOnClick={this.props.handleOnClick}/>

        </div>
        <div className="col-10" style={{backgroundColor: "grey", padding: "0"}}>
          <Map 
      style="mapbox://styles/mapbox/dark-v9"
      zoom ={[2.600019725398168]}
      center={[-90.36957574368233, 40.732480262447524]}
  containerStyle={{
    height: "100vh",
    width: "100vw",
  }}>
  
  }

  {markers}
    
</Map>
        </div>
      </div>
    </div>
  )

  }
  
}

export default Wrapper;

