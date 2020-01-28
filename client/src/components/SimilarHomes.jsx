import React from 'react';
import SimilarHome from './SimilarHome.jsx';

class SimilarHomes extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
      {this.props.similarHomes.map((similarHome,i) =>
        <SimilarHome similarHome={similarHome} key={i}/>
      )}
      </div>
    )
  }
}

export default SimilarHomes