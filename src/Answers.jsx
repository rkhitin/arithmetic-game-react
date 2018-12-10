import React, { useState, useEffect } from 'react';
import { object, func } from 'prop-types';

const Answers = ({ answers, handleAnswer }) => {
  const [answerdIndex, setAnswerdIndex] = useState(null);

  useEffect(setAnswerdIndex.bind(null, null), [answers]);

  const handleAnswerWithTimeout = index => {
    setAnswerdIndex(index);

    setTimeout(handleAnswer.bind(null, index), 1000);
  };

  const getButtonAdditionalClass = itemIndex => {
    if (answerdIndex === null) return '';

    return answers.rightAnswerIndex === itemIndex ? 'btn-success' : 'btn-danger';
  };

  return (
    <div className="row">
      {answers.items.map((answer, index) => (
        <div key={index} onClick={handleAnswerWithTimeout.bind(null, index)} className="col sm-6">
          <button className={`btn-block ${getButtonAdditionalClass(index)}`}>{answer}</button>
        </div>
      ))}
    </div>
  );
};

Answers.propTypes = {
  answers: object,
  handleAnswer: func,
};

export default Answers;
