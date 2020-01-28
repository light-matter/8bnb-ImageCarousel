import React from 'react';
import SimilarHome from './SimilarHome.jsx';

class SimilarHomes extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentImgIdx : 0
    }
  }

  render(){

    return(
      <div>
        {this.props.similarHomes.map((similarHome,i) =>
          <SimilarHome url={similarHome.images[this.state.currentImgIdx]} key={i}/>
        )}
      </div>
    )
  }
}

export default SimilarHomes