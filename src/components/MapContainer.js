import React, { Component } from 'react'
import './main.css'
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import Container from 'react-bootstrap/Container'


// const mapStyles = {
//     height: '300px',
//     width:'100%'
//   };

export class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
   

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };


    render() {
        return (
            <Container>
                <h>sgdhjghsj</h>
               <Map
        google={this.props.google}
        zoom={16}
        // style={mapStyles}
        initialCenter={{
         lat: -41.235495,
         lng: 174.917237
        }}
      >
             <Marker
          onClick={this.onMarkerClick}
          name={'Sparkle Auto Services'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose} 
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>







      </Map>
            </Container>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCAdtPtp5jCZwfI_uYtWBsRfS2z5v1N9Ys'
  })(MapContainer);
