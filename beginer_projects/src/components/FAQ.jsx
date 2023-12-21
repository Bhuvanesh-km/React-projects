import React from "react";

const questions = [
  "Is this good product",
  "How much this costs",
  "When can I get it",
];

const FAQ = () => {
  return (
    <center className="faq-container">
      <h1 className="heading">FAQ/Accordion</h1>
      <div className="q-container">
        <h2 className="sub-heading">Frequently asked questions</h2>
        {questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </center>
  );
};
export default FAQ;

const Question = ({ question }) => {
  return <div className="question">{question}</div>;
};
