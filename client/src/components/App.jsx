import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get('/homes')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return(
      <h2> Hello world! </h2>
    )
  }
}



export default App;