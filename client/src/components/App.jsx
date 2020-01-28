import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      // carousels: []
      image: ''
    }
    // console.log(this.state.image);
  }

  getHomes() {
    axios.get('/homes')
      .then(response => {
        // handle success
        // console.log(response.data);
        console.log(response.data[0].homes[0].images[0]);
        this.setState({
          // carousel: response.data[0].homes;
          image: response.data[0].homes[0].images[0]
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  componentDidMount() {
    this.getHomes();
  }

  render() {
    return(
      <div>

        <Carousel imgUrl={this.state.image}/>

      </div>
    )
  }
}



export default App;