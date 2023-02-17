import { React, Fragment } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import ContactSection from "./ContactSection";

const containerStyle = {
  width: "100vw",
  height: "20rem",
};

const center = {
  lat: 59.2816144307186,
  lng: 15.219311682092664,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

function Footer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return (
    <Fragment>
      {isLoaded ? (
        <div className="mt-40">
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={16}
            center={center}
            options={OPTIONS}
          ></GoogleMap>
        </div>
      ) : null}
      <footer className="flex flex-col justify-center sm:flex-row sm:gap-16 gap-6 sm:pb-16 sm:pt-12 bg-grey p-6 h-fit">
        <div>
          <h4>Princess konditori</h4>
          <h4>Örebro, Storgatan 47</h4>
          <h4>703 63 Örebro, Sweden</h4>
        </div>
        <ContactSection />
      </footer>
    </Fragment>
  );
}
export default Footer;
