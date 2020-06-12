// Components==============
import location from "assets/mapsIcon.png";
import GoogleMapReact from "google-map-react";
import React from "react";
import styled from "styled-components";
// =========================

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const Location = styled.img`
  position: absolute;
  transform: translate(-50%, -100%);
  width: 25px;
`;

const Shade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.1;
  left: 0;
  top: 0;
  pointer-events: none;
`;

const defaultProps = {
  center: {
    lat: 51.43333,
    lng: 5.43117,
  },
  zoom: 13,
};

const createMapOptions = () => ({
  styles: [
    {
      stylers: [
        { saturation: -100 },
        { gamma: 0.8 },
        { lightness: 4 },
        { visibility: "on" },
      ],
    },
  ],
});

export default function Maps() {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}
      >
        <Location
          src={location}
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          alt="location"
        />
      </GoogleMapReact>
      <Shade />
    </MapWrapper>
  );
}
