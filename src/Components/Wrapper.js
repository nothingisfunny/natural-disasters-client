import React, {Component} from 'react'
// import ReactMapboxGl, { Popup, Marker, NavigationControl} from "react-mapbox-gl";
import MapGL, {Marker, Popup} from 'react-map-gl';
import Dashboard from './Dashboard'
import Map from './Map'
import CityPin from './CityPin'

class Wrapper extends Component{
  //map amount of incidents by state

  render(){





    return(
    <div className="container-fluid">
      <div className="row" style={{minHeight: "100vh" }}>
        <div className="col-2" style={{backgroundColor: "black", overflow: "scroll!important"}}>
          <Dashboard disasters={this.props.disasters} states={this.props.states} disaster_types={this.props.disaster_types} handleOnClick={this.props.handleOnClick}/>

        </div>
        <div className="col-10" style={{backgroundColor: "grey", padding: "0"}}>
          <Map disasters={this.props.disasters} states={this.props.states} disaster_types={this.props.disaster_types}/>
            
          
        </div>
      </div>
    </div>
  )

  }
  
}

export default Wrapper;

