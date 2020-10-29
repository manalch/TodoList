import 'antd/dist/antd.css';
import './App.css';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { SnippetsOutlined, CheckSquareOutlined } from '@ant-design/icons';
import PageNotFound from './components/PageNotFound';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    current: 'todoKey',
  };

  handleClick = event => {
    this.setState({ current: event.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="app">
        <Layout className="app-layout">
          <BrowserRouter>
            <Menu onClick={this.handleClick} className="menu-class" mode="horizontal" selectedKeys={[current]}>
              <Menu.Item key="todoKey">
                <Link to="/" className="white link"><SnippetsOutlined />Todo Generator</Link>
              </Menu.Item>
              <Menu.Item key="doneKey">
                <Link to="/done" className="white link"><CheckSquareOutlined /> Completed Todos</Link>
              </Menu.Item>
            </Menu>
            <Switch>
              <Route exact path="/done" component={DoneListContainer} />
              <Route exact path="/" component={TodoListContainer} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Layout>
        <ToastContainer />
      </div>
    );
  }
}

export default App;