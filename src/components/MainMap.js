import React, { useState, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import * as waterLevelData from "../data/water.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  const [country, setCountry] = useState({});

  const results = waterLevelData.features.map((value) => {
    return (
      <>
        <div>
          <p> {value.label} </p>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="map">
        <h4 className="map__map-header">
          NASA International Space Apps Challenge
        </h4>
        <p className="map__map-paragraph">
          The United Nations (UN) Sendai Framework for Disaster Risk Reduction
          2015-2030 outlines seven targets and four priorities for action to
          prevent new and reduce existing disaster risks. The framework aims to
          achieve the substantial reduction of disaster risk, losses in lives,
          and loss of economic, physical, and social assets of people,
          communities and countries by 2030.
        </p>
      </div>
      <div className="map__map-box">
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(
                        <>
                          <p> {results} </p>
                        </>
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: " #537eff",
                        outline: "none",
                      },
                      pressed: {
                        fill: " #537eff",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

export default memo(MapChart);
