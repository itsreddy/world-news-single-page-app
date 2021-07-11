import React, { Component, useState } from "react";
import { geoMercator } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "./World.css";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import { Button } from "@material-ui/core";

const SimpleWorldMap = ({ setTooltipContent, setClickCountryContent }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const [mapPosition, setMapPosition] = useState([0, 0, 1]);

  const handleReset = () => {
    setMapPosition([0, 0, 1]);
  };

  const countriesAllowed =
    "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";
  const set1 = new Set(countriesAllowed.match(/.{1,2}/g));
  const countriesActuallyAllowed =
    "denohkrusvinzaiscnitfressabraraugbpkiecanlus";
  const set2 = new Set(countriesActuallyAllowed.match(/.{1,2}/g));

  const customprojection = geoMercator();

  const CustomGeography = (geo) => {
    const { NAME, ISO_A2 } = geo.properties;

    if (set2.has(ISO_A2.toString().toLowerCase())) {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onMouseEnter={() => {
            setTooltipContent(`${NAME} - ${ISO_A2}`);
          }}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
          onClick={() => {
            setClickCountryContent(`${ISO_A2}`);
          }}
          style={{
            default: {
              fill: "#FCB1A2",
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
      );
    } else {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onMouseEnter={() => {
            setTooltipContent(`${NAME} - ${ISO_A2}`);
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
              fill: "#D6D6DA",
              outline: "none",
            },
          }}
        />
      );
    }
  };

  return (
    <div className='map-container'>
      <Button className='recenterButton' onClick={handleReset}>
        <MyLocationOutlinedIcon />
      </Button>

      <ComposableMap
        // customProjection={projectionConfig}
        projection={customprojection}
        data-tip=''
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
              geographies.map((geo) => CustomGeography(geo))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default SimpleWorldMap;
