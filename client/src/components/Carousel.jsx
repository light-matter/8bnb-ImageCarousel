import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = "carousel">
        <ImageSlide url = {this.props.imgUrl} />
      </div>
    )
  }
}

export default Carousel;