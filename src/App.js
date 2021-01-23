import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          counters: [
              {"id": 1, "value": 0},
              {"id": 2, "value": 0},
              {"id": 3, "value": 0},
              {"id": 4, "value": 0}
          ]
      };
      this.handleIncrement = this.handleIncrement.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleReset = this.handleReset.bind(this);
  }

  render() {
      return (
        <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <div className="container">
            <Counters 
              counters={this.state.counters}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
            />
          </div>
        </React.Fragment>
      );
  }

  handleIncrement(counterID) {
      console.log(`Increment counter ${counterID}`);
      let counters = [...this.state.counters];
      for (let i = 0; i < counters.length; i++) {
          if (counters[i].id === counterID) {
              counters[i].value += 1;
              break
          }
      }
      this.setState({counters: counters});
  }

  handleDelete(counterID) {
      console.log(`delete counter ${counterID}`);
      const counters = this.state.counters.filter(counter => counter.id !== counterID);
      this.setState({counters: counters});
  }

  handleReset() {
      let counters = [...this.state.counters];
      for (let i = 0; i < counters.length; i++) {
          counters[i].value = 0;
      }
      this.setState({counters: counters});
  }
}

export default App;
