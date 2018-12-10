import React, { useState, useEffect } from 'react';

const Answers = ({ answers, onAnswer }) => {
  const [answerdIndex, setAnswerdIndex] = useState(null);
  useEffect(
    () => {
      setAnswerdIndex(null);
    },
    [answers]
  );

  const handleAnswer = index => {
    setAnswerdIndex(index);

    setTimeout(onAnswer.bind(null, index), 1000);
  };

  const getButtonAdditionalClass = itemIndex => {
    if (answerdIndex === null) return '';

    return answers.rightAnswerIndex === itemIndex ? 'btn-success' : 'btn-danger';
  };

  console.log(answerdIndex);

  return (
    <div className="row">
      {answers.items.map((answer, index) => (
        <div key={index} onClick={handleAnswer.bind(null, index)} className="col sm-6">
          <button className={`btn-block ${getButtonAdditionalClass(index)}`}>{answer}</button>
        </div>
      ))}
    </div>
  );
};

export default Answers;
