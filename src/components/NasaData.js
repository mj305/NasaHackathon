import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import * as waterLevelData from "../data/water.json";

function NasaData() {
  const [activePoint, setActivePoint] = useState(null);

  var normalIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var dangerIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div>
      <div>
        <h3>Flood Risk Visualiser</h3>
        {!activePoint && <p>Click on pointer to get more information</p>}
        {activePoint && (
          <div>
            <h4>Name: {activePoint.properties.label}</h4>
            <h6>ID: {activePoint.properties.RLOIid}</h6>
            <p>
              Coordinates: {activePoint.properties.lat},{" "}
              {activePoint.properties.long}
            </p>
            {activePoint.properties.stageScale &&
              activePoint.properties.stageScale.highestRecent && (
                <p>
                  Highest Recent:{" "}
                  {activePoint.properties.stageScale.highestRecent.value}
                </p>
              )}
            {activePoint.properties.stageScale &&
              activePoint.properties.stageScale.highestRecent && (
                <p>
                  Date:{" "}
                  {activePoint.properties.stageScale.highestRecent.dateTime}
                </p>
              )}
          </div>
        )}
      </div>
      <div>
        <Map center={[56, 0]} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {waterLevelData.features
            .filter((item) => item.properties.stageScale !== undefined)
            .filter(
              (item) => item.properties.stageScale.highestRecent !== undefined
            )
            .map((spot) => {
              return (
                <Marker
                  icon={
                    spot.properties.stageScale.highestRecent.value > 3
                      ? dangerIcon
                      : normalIcon
                  }
                  key={spot.properties.RLOIid}
                  position={[spot.properties.lat, spot.properties.long]}
                  onclick={() => setActivePoint(spot)}
                />
              );
            })}
        </Map>
      </div>
    </div>
  );
}

export default NasaData;
