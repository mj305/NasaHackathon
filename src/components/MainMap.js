import React, { Component, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import * as parkData from "../data/skateboard-parks.json";

function MainMap() {
    const [activePoint, setActivePoint] = useState(null);

    var normalIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var dangerIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    return (
      <div className="row">
        <div className="col s4">
            <h3>Flood Risk Visualiser</h3>
            {!activePoint && <p>Click on pointer to get more information</p> }
            {activePoint && (
            <div>
              <h4>Name: {activePoint.properties.NAME}</h4>
              <h6>ID: {activePoint.properties.PARK_ID}</h6>
              <p>Description: {activePoint.properties.DESCRIPTIO}</p>
            </div>
            )}
        </div>
        <div className="col s8">
          <Map center={[37.9, -95.0]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {parkData.features.map(park => (
            <Marker
              icon={park.properties.DANGER_LEVEL === "HIGH" ? dangerIcon : normalIcon}
              key={park.properties.PARK_ID}
              position={[
                park.geometry.coordinates[1],
                park.geometry.coordinates[0]
              ]}
              onclick={() => setActivePoint(park)}
            />
          ))}
          </Map>
        </div>
      </div>
      );
}

export default MainMap;