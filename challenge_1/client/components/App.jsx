import React from 'react';
import axios from 'axios';

import EventsList from './EventsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('./events')
      .then((res) => {
        this.setState({ events: res.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <EventsList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
