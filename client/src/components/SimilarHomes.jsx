import React from 'react';
import SimilarHome from './SimilarHome.jsx';
import styled from 'styled-components';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SimilarHomes = ({similarHomes}) => (
  <RowDiv>
    {similarHomes.map((similarHome, i) =>
      <SimilarHome similarHome={similarHome} key={i}/>
    )}
  </RowDiv>
);


export default SimilarHomes;