import React from "react";
import ExerciseList from "../components/ExerciseList";
import Hello from "../components/Hello";
import AddButton from "../components/AddButton";
import { useSelector } from "react-redux";

const Exercises = () => {
  const exercisesReducer = useSelector((state) => state.exercises);

  return (
    <div className="exercise-container">
      <Hello />
      <ExerciseList exercises={exercisesReducer.exercises} />
      <AddButton />
    </div>
  );
};

export default Exercises;
