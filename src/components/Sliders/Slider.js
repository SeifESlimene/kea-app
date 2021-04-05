import React, { Component } from 'react';

export default class Slider extends Component {
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
