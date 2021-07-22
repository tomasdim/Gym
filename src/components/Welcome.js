import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="welcome">
    <div className="welcome-text-container">
      <p className="welcome-text">
        Begin training with the best coaches and change your body forever!
      </p>
    </div>
    <Link style={{ textDecoration: "none" }} to="/exercise">
      <div className="welcome-button">Start Now</div>
    </Link>
  </div>
);

export default Welcome;
