import React from 'react';

class EventsListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <div>{this.props.event.date}</div>
        <div>{this.props.event.description}</div>
        <div>{this.props.event.lang}</div>
        <div>{this.props.event.category1}</div>
        <div>{this.props.event.category2}</div>
        <div>{this.props.event.granularity}</div>
      </div>
    )
  }
}

export default EventsListEntry;
