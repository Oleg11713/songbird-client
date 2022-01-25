import React from "react";

import AnswerOptions from "../answerOptions";
import Description from "../description";

import "./styles.scss";

const AnswerArea = ({ birds, currentBird }) => (
  <div className="answer-area">
    <AnswerOptions birds={birds} currentBird={currentBird} />
    <Description />
  </div>
);

export default AnswerArea;
