import React from 'react';
import SimilarHome from './SimilarHome.jsx';

class SimilarHomes extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentImgIdx : 0
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    // imgUrls.length - 1
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    imgUrls.length - 1
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render(){

    return(
      <div className = "similarHomes">

      <Arrow direction = "left" handleSubmit = {this.previousSlide} glyph = "&#9664;" />

        {this.props.similarHomes.map((similarHome,i) =>
          <SimilarHome url={similarHome.images[this.state.currentImgIdx]} key={i}/>
        )}

      <Arrow direction = "right" handleSubmit = {this.nextSlide} glyph="&#9654;"/>

      </div>
    )
  }
}

export default SimilarHomes