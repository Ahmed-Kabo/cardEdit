import Counter from "./counter";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  deleteHandeler = (id) => {
    const counters = this.state.counters.filter((m) => m.id !== id);
    this.setState({ counters });
  };

  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  reserHandeler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <Button variant="info" onClick={this.reserHandeler}>
          reset
        </Button>
        {this.state.counters.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            count={count}
            onDelete={this.deleteHandeler}
            onIncrement={this.handelIncrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
