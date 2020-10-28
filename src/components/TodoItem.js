import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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
            // toast.error(this.props.todo.text + " is marked as unfinished.", {
            //   autoClose: 1500,
            //   closeOnClick: true
            // });
          } else {
            alert(this.props.todo.text + " is marked as finished.");
            // toast.success(this.props.todo.text + " is marked as finished.", {
            //   autoClose: 1500,
            //   closeOnClick: true
            // });
          }
        });
      });
    }

    const onDelete = (id) => {
      deleteTodo(id).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          toast.success("Successfully removed " + this.props.todo.text + ".", {
            autoClose: 1500,
            closeOnClick: true
          });
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
        <ToastContainer />
      </div>
    );
  }
}

export default TodoItem;