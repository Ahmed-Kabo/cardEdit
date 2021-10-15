import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Counter extends Component {
  render() {
    let classes = this.badgeFn();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.count)}
          className="btn btn-secondary m-2"
        >
          increment
        </button>

        <Button
          onClick={() => this.props.onDelete(this.props.count.id)}
          variant="danger"
        >
          Delete
        </Button>
      </div>
    );
  }

  badgeFn() {
    let classes = "badge m-2 bg-";
    classes += this.props.count.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.count;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
