import React, {Component} from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background(0,0,0,0.6);
  display: ${(props => props.showModal ? 'block' : 'none')};
`
const ModalDiv = styled.div`
  position: fixed;
  border-style: solid;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const Modal = ({showModal, heartClick, children}) => {

  /* const showModalClassName = showModal ? 'modal display-block' : 'modal display-none'; */

  return(

    <BackgroundDiv showModal = {showModal}>
      <ModalDiv>
        <h1> close </h1>
        <button onClick = {heartClick}> Close </button>
      </ModalDiv>
    </BackgroundDiv>

  );
};

export default Modal;