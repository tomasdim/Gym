import React from "react";
import Card from "./Card";

const ExerciseList = ({ exercises }) => (
  <div className="exerciselist-container">
    {exercises.map((exercise) => (
      <Card
        key={exercise.id}
        title={exercise.title}
        description={exercise.description}
        img={exercise.img}
        leftColor={exercise.leftColor}
        rightColor={exercise.rightColor}
      />
    ))}
  </div>
);

export default ExerciseList;
