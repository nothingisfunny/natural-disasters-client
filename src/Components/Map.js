import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import StatePin from './StatePin'

const TOKEN = 'pk.eyJ1Ijoibm90aGluZ2lzZnVubnkiLCJhIjoiY2pnMnp3Y3F6NjlweDJ3bWQ2ZXdzZnpnZSJ9.hRyi0M7G-rtEMFYOhNTp-g'; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }
  renderPopup(){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.state.longitude}
        latitude={this.state.popupInfo.state.latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <h4>{this.state.popupInfo.state.fullName}</h4>
        <p>{this.state.popupInfo.incidentNumber} {this.state.popupInfo.disaster} incident(s)</p>
      </Popup>

      )
  }
  

  render() {


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

      let marker = Object.keys(stateIncidents[key]).map((incident, index)=>{
        const incidentNumber = stateIncidents[key][incident]
        //find corresponding icon
        const icon = this.props.disaster_types.find((element)=>{
          if(element.name === incident){return element}
        })
        const popupInfo = {state: state, disaster: incident, incidentNumber: incidentNumber}
       

        //return the marker
       return(
          <div key={index}>
            <Marker longitude={state.longitude} latitude={state.latitude} offsetTop={-10} offsetLeft={-5}>
              <StatePin img={icon.imgUrl} incidentNumber={incidentNumber} onClick={() => this.setState({popupInfo: popupInfo})}/>
            </Marker>
            
       </div>
        )  

      })

      markers.push(marker)
      
    })

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN} >
        {markers}
        {this.renderPopup()}
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

      </MapGL>
    );
  }

}