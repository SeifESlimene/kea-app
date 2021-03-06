import './styles.scss';
import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { kea } from 'kea';

import { take, race, put, delay } from 'redux-saga/effects';

const range = (n) => {
  var arr = [...Array(n).keys()];
  return arr;
};

const images = [
  {
    src: 'https://picsum.photos/id/237/500/300',
    author: 'Seif Eddine Slimene',
  },
  {
    src: 'https://picsum.photos/id/238/500/300',
    author: 'Seif Eddine Slimene',
  },
  {
    src: 'https://picsum.photos/id/350/500/300',
    author: 'Seif Eddine Slimene',
  },
];

@kea({
  key: (props) => props.id,

  path: (key) => ['scenes', 'homepage', 'slider', key],

  actions: () => ({
    updateSlide: (index) => ({ index }),
  }),

  reducers: ({ actions, props }) => ({
    currentSlide: [
      props.initialSlide || 0,
      PropTypes.number,
      {
        [actions.updateSlide]: (state, payload) =>
          payload.index % images.length,
      },
    ],
  }),

  selectors: ({ selectors }) => ({
    currentImage: [
      () => [selectors.currentSlide],
      (currentSlide) => images[currentSlide],
      PropTypes.object,
    ],
  }),

  // This saga is run when the component is mounted.
  // The function is a regular redux-saga worker that has access to:
  // 1) this.actions, 2) this.props
  //
  // Read the redux-saga documentation to understand the different
  // functions like: race(), put(), take(), etc
  start: function* () {
    // This Also Works For Logging Stuff
    // const { updateSlide } = this.actionCreators;
    const { updateSlide } = this.actions;

    console.log('Starting homepage slider saga');
    // console.log(this, this.actions, this.props)

    while (true) {
      // wait until the updateSlide() action is triggered or a 5sec timeout occurs
      const { timeout } = yield race({
        change: take(updateSlide),
        timeout: delay(5000),
      });
      if (timeout) {
        // use this.get(..) to select the latest data from redux
        const currentSlide = yield this.get('currentSlide');

        // actions are not automatically bound to dispatch, so
        // you must use redux-saga's put() with them
        yield put(updateSlide(currentSlide + 1));
      }
    }
  },

  // this saga is run when the component is unmounted
  stop: function* () {
    console.log('Stopping homepage slider saga');
  },

  // The redux-saga takeEvery function.
  // It waits for actions and runs the relevant functions.
  // Also available: takeLatest
  takeEvery: ({ actions, workers }) => ({
    [actions.updateSlide]: workers.updateSlide,
  }),

  // it's recommended to group all the logic under the workers: {} object.
  workers: {
    updateSlide: function* (action) {
      console.log('slide update triggered', this.props.id);
    },
  },
})
class Slider extends Component {
  render() {
    const { currentSlide, currentImage } = this.props;
    const { updateSlide } = this.actions;

    const title = `Image copyright by ${currentImage.author}`;

    return (
      <div className="kea-slider">
        <img src={currentImage.src} alt={title} title={title} />
        <div className="buttons">
          {range(images.length).map((i) => (
            <span
              key={i}
              className={i === currentSlide ? 'selected' : ''}
              onClick={() => updateSlide(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

class SlidersScene extends Component {
  render() {
    return (
      <div className="slider-container">
        <Slider id={1} initialSlide={0} />
      </div>
    );
  }
}

export default hot(SlidersScene);
