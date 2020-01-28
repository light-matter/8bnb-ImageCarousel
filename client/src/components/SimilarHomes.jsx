import React from 'react';
import SimilarHome from './SimilarHome.jsx';

const SimilarHomes = ({similarHomes}) => (

  similarHomes.map((similarHome,i) =>
    <SimilarHome similarHome={similarHome} key={i}/>
  )

)


export default SimilarHomes