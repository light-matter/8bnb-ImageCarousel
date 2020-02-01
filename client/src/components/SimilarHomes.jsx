import React from 'react';
import styled from 'styled-components';
import SimilarHome from './SimilarHome.jsx';
import TextInfo from './TextInfo.jsx'

const RowDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
`


const SimilarHomes = ({similarHomes}) => (
  <RowDiv>
    {similarHomes.map((similarHome, i) =>
      <ContainerDiv key={i}>
        <SimilarHome images={similarHome.images} />
        <TextInfo similarHome={similarHome}/>
      </ContainerDiv>
    )}
  </RowDiv>
);


export default SimilarHomes;
