import React, { Component } from 'react';
import {deleteTodo, getTodos, updateTodo } from '../apis/todo';


class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const onClick = () => {
      const { id, done } = this.props.todo;
      updateTodo(id, !done).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          if (this.props.todo.done) {
            alert(this.props.todo.text + " is marked as unfinished.");
          } else {
            alert(this.props.todo.text + " is marked as finished.");
          }
        });
      });
    }

    const onDelete = (id) => {
      deleteTodo(id).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          alert("Successfully removed " + this.props.todo.text + ".");
        })
      });
    }

    const style = {
      textDecoration: todoIsDone ? 'line-through' : '',
      color: todoIsDone ? 'gray' : 'white'
    }
    return (
      <div>
        <div id="todoItem">
          <span style={style} className="col-92" onClick={onClick}>{this.props.todo.text}</span>
          <span className="col-8" onClick={() => onDelete(this.props.todo.id)}><span id="deleteIcon">X</span></span>
        </div>
      </div>
    );
  }
}

export default TodoItem;