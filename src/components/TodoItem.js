import React, { Component } from 'react';
import { deleteTodo, getTodos, updateTodo } from '../apis/todo';
import { DeleteOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const onClick = () => {
      const { id, done } = this.props.todo;
      updateTodo(id, !done).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          if (this.props.todo.done) {
            toast.success(this.props.todo.text + " is done.", {
              autoClose: 1500,
              closeOnClick: true
            });
          } else {
            toast.error(this.props.todo.text + " is undone.", {
              autoClose: 1500,
              closeOnClick: true
            });
          }
        });
      });
    }

    const onDelete = (id) => {
      deleteTodo(id).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          toast.success("deleted.", {
            autoClose: 1500,
            closeOnClick: true
          });
        })
      });
    }

    const style = {
      background: todoIsDone ? '#DDD' : '#FFF',
      color: todoIsDone ? '#888' : '#201733'
    }

    return (
      <div className="main-container-item">
        <div className="created-todo-class" style={style}>
          <span onClick={onClick}>{this.props.todo.text}</span>
          <span className="delete-todo-class" onClick={() => onDelete(this.props.todo.id)}><DeleteOutlined /></span>
        </div>
      </div>
    );
  }
}

export default TodoItem;