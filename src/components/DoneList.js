import React, { Component } from 'react';
import TodoItemView from './TodoItemView';
import { getTodos } from '../apis/todo';

class DoneList extends Component {

    componentDidMount() {
        getTodos().then(response => {
            this.props.getTodos(response.data);
        });
    }

    render() {
        const doneTodos = this.props.doneTodos.map((todo) => (
            <div className="created-todo-class">
                <TodoItemView key={todo.id} todo={todo} />
            </div>
        ));
        return (
            <div className="todo-group-container">
                {doneTodos}
            </div>
        );
    }
}

export default DoneList;