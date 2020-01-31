import React from 'react';
import axios from 'axios';
import SimilarHomes from './SimilarHomes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
    };
  }

  getHomes() {
    axios.get('/homes')
      .then((response) => {
        console.log(response.data[0].homes);
        this.setState({
          homes: response.data[0].homes,
        });
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  componentDidMount() {
    this.getHomes();
  }

  render() {
    return (
      <SimilarHomes similarHomes={this.state.homes} />
    );
  }
}


export default App;
