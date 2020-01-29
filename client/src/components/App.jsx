import React from 'react';
import axios from 'axios';
import SimilarHomes from './SimilarHomes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }

  getHomes() {
    axios.get('/homes')
      .then(response => {
        // handle success
        // console.log(response.data[0].homes);
        // console.log(response.data[0].homes[0].images[0]);
        this.setState({
          homes: response.data[0].homes
        });
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
    return (
      <SimilarHomes similarHomes={this.state.homes}/>
    );
  }
}



export default App;