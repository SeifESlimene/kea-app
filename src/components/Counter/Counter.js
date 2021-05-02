import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { connect } from 'kea';
import counterLogic from './counterLogic';

@connect({
  actions: [counterLogic, ['increment', 'decrement', 'reset']],
  props: [counterLogic, ['counter']],
})
export class Counter extends Component {
  render() {
    const { counter } = this.props;
    const { increment, decrement, reset } = this.actions;
    return (
      <>
        <div
          style={{
            height: 'calc(100vh - 70px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            justifyItems: 'center',
          }}
        >
          <h1>{counter}</h1>
          <button
            onClick={() => increment(1)}
            style={{ minWidth: '500px', margin: '0 0 5px' }}
          >
            Increment
          </button>
          <button
            onClick={() => decrement(1)}
            style={{ minWidth: '500px', margin: '0 0 5px' }}
          >
            Decrement
          </button>
          <button
            onClick={reset}
            style={{ minWidth: '500px', margin: '0 0 5px' }}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default hot(Counter);
