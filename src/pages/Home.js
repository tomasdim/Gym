import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ImageSlider from "../components/Imageslider";
import Welcome from "../components/Welcome";
import "../components/styles/style.css";
import "../components/styles/Slider.css";

import { SliderData } from "../components/SliderData";

function Home() {
  return (
    <div>
      <Welcome />
      <ImageSlider slides={SliderData} />
    </div>
  );
}
export default Home;
