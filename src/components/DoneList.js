import React, { Component } from 'react';
import TodoItemView from './TodoItemView';
import { Link } from 'react-router-dom';
import { getTodos } from '../apis/todo';

class DoneList extends Component {

    componentDidMount() {
        getTodos().then(response => {
          this.props.getTodos(response.data);
        });
      }

    render() {
        const doneTodo = this.props.todos
            .filter((todo) => todo.done)
            .map((todo) => (<TodoItemView key={todo.id} todo={todo}/>));
        return (
            <div>
                <h1 className="white">Done</h1>
                <Link to="/" className="white link">todo</Link>
                {doneTodo}
            </div>
        );
    }
}

export default DoneList;