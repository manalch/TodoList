import React, { Component } from 'react';
import TodoItemView from './TodoItemView';
import { Link } from 'react-router-dom';

class DoneList extends Component {
    render() {
        const doneTodo = this.props.todos
            .filter((todo) => todo.done)
            .map((todo) => (<TodoItemView todo={todo}/>));
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