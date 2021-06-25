import React, { Component, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";
import "../global.d.ts";
import { geoTimes } from "d3-geo-projection";
import posed, { PoseGroup } from "react-pose";
// @ts-ignore
import { geoCylindricalEqualArea } from "d3-geo-projection";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const TestMap = ({ setTooltipContent }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const mapCenter = [8.3, 46.8];

  const [mapPosition, setMapPosition] = useState([0, 0, 1]);

  const handleReset = () => {
    setMapPosition([0, 0, 1]);
  };

  return (
    <div className='map-container'>
      {/* <button onClick={handleReset}>{"Recenter"}</button> */}
      <button type='button' class='btn btn-primary' onClick={handleReset}>
        Recenter
      </button>
      <ComposableMap
        // style={{
        //   width: "100vw",
        //   height: "auto",
        // }}
        // projection='geoAzimuthalEqualArea'
        data-tip=''
        projectionConfig={{ scale: 150 }}
      >
        {/* <Graticule stroke='#ffcccb' /> */}
        <ZoomableGroup
          center={[mapPosition[0], mapPosition[1]]}
          zoom={mapPosition[2]}
          onMoveEnd={({ coordinates, zoom }) => {
            setMapPosition([coordinates[0], coordinates[1], zoom]);
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
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
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
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
  );
};

export default TestMap;
