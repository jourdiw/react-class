import { Component } from "react";

class Clock extends Component {
  // initial state definition
  state = {
    date: new Date(),
    hide: false
  };

  // after first render, start the timer and store a reference to it to stop it if needed
  componentDidMount = () => {
    // we set the interval to occur 5 times a second on purpose, to illustrate shouldComponentUpdate
    this.timer = setInterval(this.refreshDate, 200);
  };

  // here we can decide if a props or state update actually triggers a re-render (return a bool)
  shouldComponentUpdate = (nextProps, nextState) => {
    // equivalent to const currentDate = this.state.date;
    const { date: currentDate } = this.state;

    // again, equivalent const nextDate = nextState.date. Learn destructuring assignement!
    const { date: nextDate } = nextState;

    // only allow re-render if the second has changed
    return currentDate.getSeconds() !== nextDate.getSeconds();
  };

  // if we want to do something when the component re-renders:
  // componentDidUpdate = () => console.log("update");

  // if the component gets unmounted, make sure to clear the interval
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  refreshDate = () => this.setState({ date: new Date() });

  render() {
    const { date } = this.state;

    // we can just return a string, returning a dom element is not required
    return date.toLocaleTimeString();
  }
}

export default Clock;
