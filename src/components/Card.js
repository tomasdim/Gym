import React from "react";
import emptyImg from "../images/empty.png";
import "./styles/Card.css";
import circlesImg from "../images/circles.png";

class Card extends React.Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        className="Card-shape mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${
            leftColor || "#56CCF2"
          }, ${rightColor || "#2F80ED"})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img
                src={img || emptyImg}
                alt="workout demostration"
                className="float-right"
              />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
