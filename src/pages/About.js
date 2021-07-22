import React from "react";
import "../components/styles/About.css";
import illustration from "../images/about2.svg";

const About = () => {
  return (
    <div className="about-container">
      <img
        src={illustration}
        alt="workout-illustration"
        className="illustration"
      />
      <h1 className="about-title">About Us</h1>
      <p className="about-textbox">
        {" "}
        <span className="lighter">Gym Maniac</span> is your new home in physical
        wellness. We join the dependable standards <br></br> of Pilates with
        forefront development to give you the most out of each exercise.{" "}
        <br></br>Our specialists are prepared and fit to push you as far as
        possible without bargaining your security. Expect high-vitality quick
        paced exercises that leave each muscle shaking. <br></br>
        <span className="lighter">Gym Maniac</span> was established in 2012 and
        now we have 2 bases with a third in transit!
      </p>
      <p className="about-textbox">
        One of our many goals is to <span className="lighter">impact</span> the
        people in a positive way, and this would be amplified in a genuinely
        group based condition, so we transformed this idea into a wellness
        encounter for individuals hoping to accomplish greatest outcomes,
        effectively, while interfacing with others and having a fabulous time.
      </p>
      <p className="about-textbox">
        Since the beginning we wanted to be the best in the industry and set our
        minds to doing so! We have grown into one of the largest online fitness
        equipment retailers having helped{" "}
        <span className="lighter">
          over 50,000 customers live longer, happier and healthier lives.
        </span>
      </p>
    </div>
  );
};
export default About;
