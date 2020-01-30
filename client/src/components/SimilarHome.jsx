import React from 'react';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

const ImgDiv = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 250px;
  width: 350px;
  margin-left: 10px;
`;

const StyledArrow = styled(Arrow)`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

class SimilarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIdx: 0
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIdx + 1;

    this.setState({
      currentImgIdx: index
    });
  }

  render() {
    return (
      <ImgDiv image={this.props.similarHome.images[this.state.currentImgIdx]}>

        <Arrow direction = "left" handleSubmit = {this.previousSlide} glyph = "&#9664;" />

        {/*<img src = {this.props.similarHome.images[this.state.currentImgIdx]} height = '250' width = '350'></img>*/}

        <Arrow direction = "right" handleSubmit = {this.nextSlide} glyph="&#9654;"/>

      </ImgDiv>
    );
  }

}


export default SimilarHome;