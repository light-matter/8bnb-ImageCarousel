import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  getHomes() {
    axios.get('/homes')
      .then(function (response) {
        // handle success
        console.log(response.data);
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
      <h2> Hello world! </h2>
    )
  }
}



export default App;