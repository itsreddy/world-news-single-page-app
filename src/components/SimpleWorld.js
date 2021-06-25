import React, { useState, useEffect } from "react";
import Loading from "./loading";
import SimpleWorldMap from "./SimpleWorldMap";
import TestMap from "./TestMap";
import ReactTooltip from "react-tooltip";

// import {hammer} from 'd3-geo-projection';

function World() {
  // const countries = ["canada"];
  // return <div>{countries.length === 0 ? <Loading /> : <SimpleWorldMap />}</div>;
  const [content, setContent] = useState("");
  return (
    <div>
      <TestMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default World;
