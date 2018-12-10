import React, { memo } from 'react';
import { number, func } from 'prop-types';

import Answers from './Answers';
import { generateTask } from './libs';

const Question = memo(
  ({ level, handleAnswer }) => {
    const task = generateTask(level);

    const handleAnswerWithRightnessFlag = answerIndex => {
      const isAnswerRight = answerIndex === task.answers.rightAnswerIndex;

      handleAnswer({ isAnswerRight });
    };

    return (
      <>
        <div className="row flex-center">
          <pre>
            <code>{task.question}</code>
          </pre>
        </div>
        <Answers answers={task.answers} handleAnswer={handleAnswerWithRightnessFlag} />
      </>
    );
  },
  (prevProps, nextProps) => prevProps.level === nextProps.level
);

Question.propTypes = {
  level: number,
  handleAnswer: func,
};

export default Question;
