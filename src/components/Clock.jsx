import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div>
        <div className="countDown__Title">{this.props.STRINGS.TIMELEFT}</div>
        <div className="countDown__Time">
          {this.state.days}
          {this.props.STRINGS.DAYS}
          {this.state.hours}
          {this.props.STRINGS.HOURS}
          {this.state.minutes}
          {this.props.STRINGS.MINUTES}
          {this.state.seconds}
          {this.props.STRINGS.SECONDS}
        </div>
      </div>
    );
  }
}
export default Clock;
