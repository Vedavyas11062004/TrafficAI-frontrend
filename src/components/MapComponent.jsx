import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pointer from "../assets/pointers.svg";

function MapComponent() {
  const customIcon = L.icon({
    iconUrl: pointer,
    popupAnchor: [0, -32],
    iconSize: [26, 26],
  });
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "60%",marginLeft:"120px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext="png"
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}"
      />
      <Marker icon={customIcon} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
