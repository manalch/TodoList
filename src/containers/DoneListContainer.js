import { connect } from 'react-redux';
import DoneList from '../components/DoneList';

const mapStateToProps = state => ({
  todos: state.todos
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;