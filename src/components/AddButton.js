import React from "react";
import "./styles/AddButton.css";
import buttonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={buttonImg} alt="Add Button" className="Fitness-Add" />
  </Link>
);

export default AddButton;
