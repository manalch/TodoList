import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import {Link } from 'react-router-dom';
import {getTodos} from '../apis/todo';

class TodoList extends Component {
  componentDidMount() {
    getTodos().then(response => {
      this.props.getTodos(response.data);
    });
  }
  render() {
    return (
      <div>
        <h1 id="appName">TodoList</h1>
        <Link to="/done" className="white link">done</Link>
        <TodoGeneratorContainer/>
        <TodoGroupContainer/>
      </div>
    );
  }
}

export default TodoList;