import React from "react";
import QuizTitle from "./QuizTitle";
import Question1 from "./Question1";
import Question2 from "./Question2";
import "./style.css";

function Quiz() {
  return (
    <div className="Quiz">
      <QuizTitle />
      <Question1 />
      <Question2 />
    </div>
  );
}

export default Quiz;
