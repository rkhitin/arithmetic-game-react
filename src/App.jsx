import React, { useState } from 'react';

import 'papercss/dist/paper.min.css';

import Welcome from './Welcome';
import Result from './Result';
import Question from './Question';
import QuestionHeader from './QuestionHeader';

let intervalId = null;

const initState = {
  level: 0,
  time: 10,
};

const App = () => {
  const [level, setLevel] = useState(initState.level);
  const [timeCounter, setTimeCounter] = useState(0);

  const initTimer = () => {
    setTimeCounter(prevTimeCounter => initState.time + prevTimeCounter);

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      setTimeCounter(prevTimeCounter => prevTimeCounter - 1);
    }, 1000);
  };

  const start = () => {
    initTimer();
    setLevel(1);
  };

  const handleAnswer = ({ isAnswerRight } = {}) => {
    if (!timeCounter) return;

    setLevel(level + 1);

    if (isAnswerRight) initTimer();
  };

  const renderContent = () => {
    switch (true) {
      case level === 0:
        return <Welcome start={start} />;
      case level > 0 && timeCounter !== 0:
        return (
          <>
            <QuestionHeader level={level} timeCounter={timeCounter} />
            <Question level={level} handleAnswer={handleAnswer} />
          </>
        );
      default:
        return <Result level={level} start={start} />;
    }
  };

  return <div className="paper container">{renderContent()}</div>;
};

export default App;
