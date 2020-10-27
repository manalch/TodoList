import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoGenerator extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.todoInput.value;
    const id = uuidv4();
    const todo = { id, text, done: false };

    this.props.addTodo(todo);
  }

  render() {
    return (
      <div id="todoGenerator">
        <form onSubmit={this.onSubmit}>
          <span>
            <input type="text" name="todoInput" id="todoInput" />
            <input type="submit" value="Add Item" id="todoSubmit"/>
          </span>
        </form>
      </div>
    );
  }
}

export default TodoGenerator;