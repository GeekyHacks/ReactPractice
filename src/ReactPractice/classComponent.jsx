import React, { Component } from 'react';

class ClassInput extends Component {
  //  A class is generally incomplete without a constructor,
  //  The props, that get passed into this component, gets passed into the class’s constructor.
  //  This, along with the super method,
  //  allows you to use the props in context to this, which, in this case, refers to the component.

  constructor(props) {
    super(props);
    // the state gets initialized as a part of the constructor.
    this.state = {
      todos: [],
      inputVal: '',
    };
    // Whenever a method is declared, you must bind the this of the method to that of the class in order to work with it,
    // as by default, the methods in a class are not bound to it.
    // Usually, you do this inside the constructor and not at runtime [in the render method]
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //you can bind the methods declared inside a class If you're using ES6 or later, you can use class property
  //syntax to define methods directly within the class body, and this will be automatically bound:
  // handleInputChange = (event) => {
  //     // ...
  //   };

  //   handleSubmit = (event) => {
  //     // ...
  //   };

  //setState method can be used to set it again! so a new state must be set, every time.
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }
  // must be added to render the jsx
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
