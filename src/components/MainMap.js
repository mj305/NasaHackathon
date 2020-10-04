import React, { Component, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as parkData from "../data/skateboard-parks.json";

function MainMap() {
    const [activePoint, setActivePoint] = useState(null);

    return (
      <div className="container">
        <Map center={[37.9, -95.0]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
        />
      ))}
        </Map>
      </div>
      );
}

export default MainMap;