import React from 'react';
import { number, func } from 'prop-types';

const Result = ({ level, start }) => (
  <>
    <div className="row flex-center">
      <p>Дошел до уровня {level}, маладца.</p>
    </div>
    <div className="row flex-center">
      <button onClick={start}>Еще раз.</button>
    </div>
  </>
);

Result.propTypes = {
  level: number,
  start: func,
};

export default Result;
