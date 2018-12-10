import React from 'react';
import { func } from 'prop-types';

const Welcome = ({ start }) => (
  <>
    <div className="row flex-center">
      <p>Надобно решать задачки, решаешь - время увеличивается. Чем дольше продержался - тем больший молодец.</p>
    </div>
    <div className="row flex-center">
      <button onClick={start}>Поехали</button>
    </div>
  </>
);

Welcome.propTypes = {
  start: func,
};

export default Welcome;
