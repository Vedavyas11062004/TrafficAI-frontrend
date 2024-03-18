import React from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
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
      center={[26.8467, 80.9462]}
      zoom={13}
      style={{ height: "600px", width: "88%", marginLeft: "120px" }}
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
      <CircleMarker
        center={[26.8506, 81.0]}
        pathOptions={{ color: "green" }}
        radius={40}
      >
        <Tooltip>Low Traffic</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={[26.847642, 80.9257312]}
        pathOptions={{ color: "red" }}
        radius={40}
      >
        <Tooltip>High Traffic</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={[26.867062, 80.9033341]}
        pathOptions={{ color: "red" }}
        radius={40}
      >
        <Tooltip>High Traffic</Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}

export default MapComponent;
