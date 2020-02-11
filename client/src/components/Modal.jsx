import React, {Component} from 'react';
import styled from 'styled-components';
import HeartModal from './HeartModal.jsx';

const BackgroundDiv = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: ${(props => props.showModal ? 'block' : 'none')};

`
const ModalDiv = styled.div`
  position: fixed;
  border-style: solid;
  background: white;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const CloseButton = styled.img`
  position: relative;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
`
const Modal = ({showModal, modalClick, heartClick, heart}) => {

  return(

    <BackgroundDiv showModal = {showModal}>
      <ModalDiv>
        <CloseButton onClick = {modalClick} src = 'https://8bnb-homes.s3-us-west-1.amazonaws.com/closeButton.png' alt = 'closeButton'/>
        <HeartModal handleSubmit={heartClick} heart={heart}/>
      </ModalDiv>
    </BackgroundDiv>

  );
};

export default Modal;