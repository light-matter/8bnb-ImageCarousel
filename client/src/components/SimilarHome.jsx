import React from 'react';
import Arrow from './Arrow.jsx';

class SimilarHome extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentImgIdx: 0
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index =  shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImgIdx + 1;

    this.setState({
      currentImgIdx: index
    });
  }

  render() {
    return(
      <div className = "similarHome">

      <Arrow direction = "left" handleSubmit = {this.previousSlide} glyph = "&#9664;" />

      <img src = {this.props.similarHome.images[this.state.currentImgIdx]} height = '250' width = '350'></img>

      <Arrow direction = "right" handleSubmit = {this.nextSlide} glyph="&#9654;"/>

      </div>
    )
  }

}


export default SimilarHome;