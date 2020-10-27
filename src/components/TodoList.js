import React, { Component } from 'react';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
    );
  }
}

export default TodoList;