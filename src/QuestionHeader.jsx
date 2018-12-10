import React from 'react';
import { number } from 'prop-types';

import { prettifyTime } from './utils';

const getBadgeClassName = timeCounter => {
  switch (true) {
    case timeCounter < 10:
      return 'danger';
    case timeCounter < 20:
      return 'warning';
    case timeCounter < 30:
      return 'success';
    default:
      return 'secondary';
  }
};

const QuestionHeader = ({ timeCounter, level }) => {
  return (
    <div className="row flex-center">
      <h3>
        Уровень: {level}.
        <br />
        Осталось времени: <span className={`badge ${getBadgeClassName(timeCounter)}`}>{prettifyTime(timeCounter)}</span>
      </h3>
    </div>
  );
};

QuestionHeader.propTypes = {
  level: number,
  timeCounter: number,
};

export default QuestionHeader;
