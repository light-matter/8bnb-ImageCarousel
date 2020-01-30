import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';

const ImgDiv = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 250px;
  width: 350px;
  margin-left: 10px;
`;

// const StyledArrow = styled(Arrow)`
//   /* position: absolute; */
//   float: left;
//   width: 50px;
//   height: 50px;
//   top: 125px;
//   right: 30px;
// `;

class SimilarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIdx: 0,
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.similarHome.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIdx + 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  render() {
    return (
      <ImgDiv image={this.props.similarHome.images[this.state.currentImgIdx]}>

        <Arrow direction="left" handleSubmit={this.previousSlide} />


        <Arrow direction="right" handleSubmit={this.nextSlide} />

      </ImgDiv>
    );
  }
}


export default SimilarHome;
