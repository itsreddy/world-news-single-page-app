import React, { Component, useState } from "react";
import { geoMercator } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "./World.css";

const SimpleWorldMap = ({ setTooltipContent, setClickCountryContent }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const [mapPosition, setMapPosition] = useState([0, 0, 0.5]);

  const handleReset = () => {
    setMapPosition([0, 0, 0.5]);
  };

  // const handleClick = (geo) => () => {
  //   console.log(geo);
  //   <Route path='/' component={NewsPage} />;
  // };

  const customProjection = geoMercator();

  return (
    <div className='map-container'>
      <button type='button' onClick={handleReset}>
        Recenter
      </button>
      <ComposableMap projection={customProjection} data-tip=''>
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
                    const { NAME, ISO_A2 } = geo.properties;
                    setTooltipContent(`${NAME} - ${ISO_A2}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ISO_A2 } = geo.properties;
                    setClickCountryContent(`${ISO_A2}`);
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

export default SimpleWorldMap;
