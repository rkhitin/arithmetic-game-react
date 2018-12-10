import React, { useState } from 'react';

import 'papercss/dist/paper.min.css';

import Answers from './Answers';
import { generateTask } from './libs';

const initState = {
  level: 1,
  rightAnserCount: 0,
};

const App = () => {
  const [level, setLevel] = useState(initState.level);
  const [rightAnserCount, setRightAnswerCount] = useState(initState.rightAnserCount);

  const task = generateTask(level);

  const onAnswer = answerIndex => {
    if (answerIndex === task.answers.rightAnswerIndex) {
      setRightAnswerCount(rightAnserCount + 1);
    } else {
      setRightAnswerCount(rightAnserCount - 1);
    }

    setLevel(level + 1);
  };

  return (
    <div className="paper container">
      <div className="row flex-center">
        <h3>
          ({level}) Hello <span className="badge secondary">{rightAnserCount}</span>
        </h3>
      </div>
      <div className="row flex-center">
        <pre>
          <code>{task.question}</code>
        </pre>
      </div>
      <Answers answers={task.answers} onAnswer={onAnswer} />
    </div>
  );
};

export default App;
