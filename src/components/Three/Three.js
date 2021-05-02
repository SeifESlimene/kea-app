import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useValues, useActions } from 'kea';
import { logic } from './logic';
import './styles.scss';

function Three() {
  console.log('<App>');
  return (
    <div className="three-container">
      <div className="three-inner-container">
        <Red />
        <span>+</span>
        <Blue />
        <span>=</span>
        <Magenta />
      </div>
    </div>
  );
}

function Red() {
  console.log('<Red>');
  const { red } = useValues(logic);
  const { incrementRed } = useActions(logic);
  return (
    <button className="btn-three red" onClick={() => incrementRed(1)}>
      {red}
    </button>
  );
}

function Blue() {
  console.log('<Blue>');
  const { blue } = useValues(logic);
  const { incrementBlue } = useActions(logic);
  return (
    <button className="btn-three blue" onClick={() => incrementBlue(1)}>
      {blue}
    </button>
  );
}

function Magenta() {
  console.log('<Magenta>');
  const { magenta } = useValues(logic);
  const { incrementMagenta } = useActions(logic);
  return (
    <button className="btn-three magenta" onClick={() => incrementMagenta(1)}>
      {magenta}
    </button>
  );
}

export default hot(Three);
