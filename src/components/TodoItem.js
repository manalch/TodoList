import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div id="todoItem">{this.props.todo.text}<span>X</span></div>
    );
  }
}

export default TodoItem;