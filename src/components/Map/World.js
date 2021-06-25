import React, { useState, useEffect } from "react";
import SimpleWorldMap from "./SimpleWorldMap";
import ReactTooltip from "react-tooltip";
import "./World.css";
import { Redirect } from "react-router-dom";
// import LoadCountriesTask from "../tasks/LoadCountries";

// import {hammer} from 'd3-geo-projection';

function World() {
  var isCountrySelected = false;

  const [content, setContent] = useState("");
  // useEffect(() => {
  //   console.log(content);
  // });

  const [clickedCountry, setClickedCountry] = useState("");

  // useEffect(() => {
  //   if (clickedCountry) {
  //     setClickedCountry(true);
  //   }
  // });

  if (clickedCountry) {
    return <Redirect to={`/world/${clickedCountry}`} />;
  } else {
    return (
      <div className='World'>
        <SimpleWorldMap
          setTooltipContent={setContent}
          setClickCountryContent={setClickedCountry}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }
}

export default World;
