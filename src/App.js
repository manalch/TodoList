import './App.css';
import TodoList from './components/TodoList';
import DoneListContainer from './containers/DoneListContainer';
import {HashRouter, BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/done" component={DoneListContainer} />
            <Route path="/" component={TodoList} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
