import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({
    text, url, nombre, lat, lng
}) => (
    <i 
        className='fa-solid fa-user-secret'
        data-toggle="tooltip"
        data-placement="top"
        title={`${text} en: ${lat}, ${lng}`}
    >
        {<a 
            href={`${process.env.REACT_APP_URL_MAPS}${lat},${lng}`}
            target={`_blank`}
        >
            {nombre}
        </a>
        }
    </i>
);

export default class MapView extends Component {

 state = {
    map: null,
    maps: null,
    center: {
        lat: 6.2716901,
        lng: -75.5776152
    },
    zoom: 11,
    locations: []
 }

 componentDidMount = () => {
    this.getLocation();
 }

 handleApiLoaded = (map, maps) => {
    this.setState({
        map
    });
    this.setState({
        maps
    })
 }

 getLocation = () => {
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(this.showPosition);
    }else{
        console.log('Geolocalización no soportada por el navegador');
    }
 }

 showPosition = (position) => {
    console.log(position)
    this.setState({
        center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
    })
 }

  render() {
    return (
        <>
        <div style = {
            {
              height: '100vh',
              width: '100%',
              marginBottom: '10vh'
            }
          }
    
          >
          <GoogleMapReact 
            bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
            defaultCenter = {this.state.center}
            defaultZoom = {this.state.zoom}
            yesIWantToUseGoogleMapApiInternals = {true}
            onGoogleApiLoaded = {({map,maps}) => 
            this.handleApiLoaded(map, maps)} 
          >
          {
          this.state.locations.map((l, i) => {
              return( 
              <AnyReactComponent
                key = {i}
                lat = {l.latitud}
                lng = {l.longitud}
                text = {l.descripcion}
                url = {l.urlMap}
                nombre = {l.nombre}
              />) 
            })
          }
          </GoogleMapReact> 
          </div> 
          </>
    );
  }
}
