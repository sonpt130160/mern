import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.Clock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  Clock() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <h2>Now is {this.state.date.toLocaleTimeString()}</h2>;
  }
}
