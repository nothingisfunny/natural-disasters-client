import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';

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

  // _renderCityMarker = (city, index) => {
  //   return (
  //     <Marker key={`marker-${index}`}
  //       longitude={city.longitude}
  //       latitude={city.latitude} >
  //       <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
  //     </Marker>
  //   );
  // }

  // _renderPopup() {
  //   const {popupInfo} = this.state;

  //   return popupInfo && (
  //     <Popup tipSize={5}
  //       anchor="top"
  //       longitude={popupInfo.longitude}
  //       latitude={popupInfo.latitude}
  //       onClose={() => this.setState({popupInfo: null})} >
  //       <CityInfo info={popupInfo} />
  //     </Popup>
  //   );
  // }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN} >

       
        {this.props.markers}
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

      </MapGL>
    );
  }

}