import React from "react";
import "../components/styles/Contactus.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
  FaWhatsappSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const mapContainerStyle = {
  width: "200%",
  height: "400px",
  float: "right",
  padding: "10%",
};

const center = {
  lat: -34.60617546130421,
  lng: -58.48537311516841,
};

export default function GymMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading maps";

  return (
    <div className="container-about">
      <div className="container-about-left">
        <div className="col-about">
          <p className="textbox">
            {" "}
            Thanks for reaching to us, down below you can see many ways of
            contacting us! Our customers satisfaction comes first so please let
            us know what you think about us.{" "}
          </p>

          <div className="followus">Follow Us</div>
          <div className="container-icons">
            <SiGmail
              className="icon"
              onClick={() => {
                window.open("mailto:contact@gymmaniac.com", "_self");
              }}
            />
            <FaTwitterSquare
              className="icon"
              onClick={() => {
                window.open("https://twitter.com", "_blank");
              }}
            />
            <FaWhatsappSquare
              className="icon"
              onClick={() => {
                window.open("https://web.whatsapp.com", "_blank");
              }}
            />
            <FaInstagramSquare
              className="icon"
              onClick={() => {
                window.open("https://instagram.com", "_blank");
              }}
            />
            <FaLinkedin
              className="icon"
              onClick={() => {
                window.open("https://linkedin.com", "_blank");
              }}
            />
          </div>
        </div>
        <div className="container-about-right">
          <GoogleMap
            className="map"
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <Marker
              position={{ lat: -34.60617546130421, lng: -58.48537311516841 }}
              title="Gym Maniac"
            ></Marker>
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
