import './styles.scss';
import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return (
      <div id="test">
        <h1 className="h1">Hello <span>Test</span></h1>
        <input className="input" type="text" />
      </div>
    );
  }
}
