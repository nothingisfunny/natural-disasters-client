import React, {Component} from 'react'
import ReactMapboxGl, { Cluster, Marker} from "react-mapbox-gl";
import Dashboard from './Dashboard'

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1Ijoibm90aGluZ2lzZnVubnkiLCJhIjoiY2pnMnp3Y3F6NjlweDJ3bWQ2ZXdzZnpnZSJ9.hRyi0M7G-rtEMFYOhNTp-g' });


class Wrapper extends Component{
  
  

  componentDidMount(){
    
  }

  render(){
    let markers;
    if(this.props.disasters && this.props.states){
      markers = this.props.disasters.map((disaster, key) =>{
      const state = this.props.states.find((element)=>{
        if(element.name === disaster.state){return element}
        })
      const icon = this.props.disaster_icons.find((element)=>{
        if(element.name === disaster.incidentType){return element}
      })
      console.log(icon)
       return(
      <Marker
  coordinates={state.coordinates}
  anchor="bottom">
  <img src={icon.imgUrl} style={{height: '17px'}} alt={disaster.incidentType}/>
  </Marker>
    )}
  );
    }
    return(
    <div className="container-fluid">
      <div className="row" style={{minHeight: "100vh"}}>
        <div className="col-3" style={{backgroundColor: "black"}}>
          <Dashboard />

        </div>
        <div className="col-9" style={{backgroundColor: "grey", padding: "0"}}>
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