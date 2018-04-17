import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl, { Marker } from "react-mapbox-gl";


const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1Ijoibm90aGluZ2lzZnVubnkiLCJhIjoiY2pnMnp3Y3F6NjlweDJ3bWQ2ZXdzZnpnZSJ9.hRyi0M7G-rtEMFYOhNTp-g' });

class App extends Component {
  render() {
    return (
      <div className="App">
      <Map 
      style="mapbox://styles/mapbox/dark-v9"
      zoom ={[2.850019725398168]}
      center={[-115.36957574368233, 50.732480262447524]}
  containerStyle={{
    height: "100vh",
    width: "100vw",
  }}>
  <Marker
  coordinates={[-123.233256,42.006186]}
  anchor="bottom">
  <img src={"https://i.imgur.com/pLLxZMS.png"} style={{height: '15px'}}/>
  </Marker>
    
</Map>

    </div>
    );
  }
}

export default App;
