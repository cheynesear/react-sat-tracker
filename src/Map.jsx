import React from "react";
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import L from 'leaflet';

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "./constants";

function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }


function Map(props) {
    const {data} = props;

    // // need to get Font Awesome sat logo working
    // const iconMarkup = renderToStaticMarkup(<i className="fa-regular fa-satellite"/>);
    // const customMarkerIcon = divIcon({
    //   html: iconMarkup,
    // });

  return (
    <MapContainer 
        center={[
            data.latitude,
            data.longitude
        ]}
        zoom={3}
        style={{height: '100vh'}}
    >
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"   
    ></TileLayer>
    <Marker
        position={[
            data.latitude,
            data.longitude
        ]}
        icon = {icon}
    ></Marker>
    <SetViewOnClick
        coords={[
            data.latitude,
            data.longitude
        ]}
    />
    L.terminator().addTo(map);
    </MapContainer>
    
  )
}

  export default Map;