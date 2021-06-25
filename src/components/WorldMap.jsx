import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './WorldMap.css';

const WorldMap = ({countries}) => {

    const mapStyle = {
        fillColor:"white",
        weight: 1,
        color: 'black',
        fillOpacity: 1
    };
    return ( 
        <MapContainer style={{height:'90vh'}} zoom={2} center={[20, 100]}>
            <GeoJSON style={mapStyle} data={countries}/>
        </MapContainer>

     );
}
 
export default WorldMap;