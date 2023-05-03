import "./StateExampleClass.css";

import { Component } from "react";
import Counter from "../counter/Counter";

export default class StateExampleClass extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <section>
        <div className="state-example">
          <h1>State Example Class</h1>
          <Counter
            increment={this.increment}
            decrement={this.decrement}
            count={this.state.count}
          />
        </div>
      </section>
    );
  }
}
