import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    const style = {
      textDecoration: this.props.todo.done ? 'line-through' : ''
    }
    return (
      <div id="todoItem" onClick={() => this.props.changeStatus(this.props.todo.id)}>
        <span style={style}>{this.props.todo.text}</span>
        <span onClick={() => this.props.deleteTodo(this.props.todo.id)}>X</span>
      </div>
    );
  }
}

export default TodoItem;