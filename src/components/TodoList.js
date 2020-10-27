import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroup from './TodoGroup';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoGroup/>
        <TodoGeneratorContainer/>
      </div>
    );
  }
}

export default TodoList;