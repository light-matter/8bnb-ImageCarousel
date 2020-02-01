import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow.jsx';
import HeartButton from './HeartButton.jsx';

const ImgDiv = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 250px;
  width: 350px;
  margin-left: 10px;
`;

class SimilarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIdx: 0,
      showButtons: false,
      // heart: this.props.similarHome.heart;
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

  }

  previousSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIdx - 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentImgIdx } = this.state;
    const shouldResetIndex = currentImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIdx + 1;

    this.setState({
      currentImgIdx: index,
    });
  }

  handleToggle() {
    this.setState({showButtons: !this.state.showButtons});
  }

  render() {
    return (

      <ImgDiv image={this.props.images[this.state.currentImgIdx]} onMouseEnter={this.handleToggle} onMouseLeave = {this.handleToggle}>

        <HeartButton/>

        <Arrow direction="left" handleSubmit={this.previousSlide} showButtons={this.state.showButtons} />

        <Arrow direction="right" handleSubmit={this.nextSlide} showButtons={this.state.showButtons} />

     </ImgDiv>

    );
  }
}


export default SimilarHome;
