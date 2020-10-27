import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div id="todoItem">{this.props.todo.text}<span onClick={() => this.props.deleteTodo(this.props.todo.id)}>X</span></div>
    );
  }
}

export default TodoItem;