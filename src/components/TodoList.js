import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <TodoGeneratorContainer/>
        <TodoGroupContainer/>
      </div>
    );
  }
}

export default TodoList;