import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import { getTodos } from '../apis/todo';

class TodoList extends Component {
  componentDidMount() {
    getTodos().then(response => {
      this.props.getTodos(response.data);
    });
  }
  render() {
    return (
      <div>
        <div className="todo-generator">
          <h1><b>TODOLIST</b>Generator</h1 >
          <h4><i>Listing all the todos in your life</i></h4>
          <TodoGeneratorContainer />
        </div>
        <div className="todo-group-container">
          <TodoGroupContainer />
        </div>
      </div >
    );
  }
}

export default TodoList;