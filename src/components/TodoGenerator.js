import React, { Component } from 'react';

class TodoGenerator extends Component {
  render() {
    return (
      <div id="todoGenerator">
        <span>
          <input type="text" name="todoInput" id="todoInput" />
          <input type="button" value="Add Item" />
        </span>
      </div>
    );
  }
}

export default TodoGenerator;