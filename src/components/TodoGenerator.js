import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoGenerator extends Component {

  isTodoExist = (text) => {
    const todos = this.props.todos.filter(todo => todo.text === text);
    return todos.length > 0;
  }

  isTodoEmpty = (text) => {
    return text === "";
  }

  onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.todoInput.value;
    if (this.isTodoEmpty(text)) {
      alert("Empty Input!");
      return;
    }
    if (this.isTodoExist(text)) {
      alert(text + " is already existing.");

      return;
    }
    const id = uuidv4();
    const todo = { id, text, done: false };
    this.props.addTodo(todo);
    event.target.todoInput.value = "";
  }

  render() {
    return (
      <div id="todoGenerator">
        <form onSubmit={this.onSubmit}>
          <span>
            <input type="text" name="todoInput" id="todoInput" />
            <input type="submit" value="Add Item" id="todoSubmit" />
          </span>
        </form>
      </div>
    );
  }
}

export default TodoGenerator;