import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import EventsList from './EventsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      searchEvents: [],
    };

    this.filterEventsSearchTerm = this.filterEventsSearchTerm.bind(this);
  }

  componentDidMount() {
    axios.get('./events')
      .then((res) => {
        this.setState({events: res.data})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  filterEventsSearchTerm(term) {
    let search = term.toLowerCase();
    const results = this.state.events.filter((event) => event.date.toLowerCase().includes(search) || event.description.toLowerCase().includes(search) || event.lang.toLowerCase().includes(search) || event.category1.toLowerCase().includes(search) || event.category2.toLowerCase().includes(search) || event.granularity.toLowerCase().includes(search))

    console.log(results)

    // this.setState({searchEvents: results});
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search filterEventsSearchTerm={this.filterEventsSearchTerm}/>
        {this.state.searchEvents.length === 0 ? <EventsList events={this.state.events}/> : <EventsList events={this.state.searchEvents}/>}
      </div>
    )
  }
}

export default App;
