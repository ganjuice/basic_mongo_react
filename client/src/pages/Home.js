import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {

 constructor() {

    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked} 
          zoom ={4}>
		<Marker onClick={this.onMarkerClick}
               name={'Current location'} />

        <InfoWindow
         marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
   	 )
	}
};


  export default GoogleApiWrapper({
  apiKey: ("AIzaSyCMrJXLnBJh7M7kxRyl2A9z2sBmY-hHhM0")
})(MapContainer)
 


