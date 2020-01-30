import React from 'react';
import styled from 'styled-components';
import SimilarHome from './SimilarHome.jsx';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SimilarHomes = ({similarHomes}) => (
  <RowDiv>
    {similarHomes.map((similarHome, i) => <SimilarHome similarHome={similarHome} key={i} />)}
  </RowDiv>
);


export default SimilarHomes;
