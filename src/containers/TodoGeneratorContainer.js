import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoGenerator from '../components/TodoGenerator';

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => { dispatch(addTodo(todo)) }
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;