import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Header from './common/Header/index';
import Menu from './common/Menu';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Like from './pages/Like';
import Ability from './pages/Ability';
import Books from './pages/Books';
import Setting from './pages/Setting';

const {Footer, Sider, Content} = Layout;

class App extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout className='slider'>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu></Menu>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <Switch>
              <Route path='/index'>
                <Main></Main>
              </Route>
              <Route path='/like'>
                <Like></Like>
              </Route>
              <Route path='/ability'>
                <Ability></Ability>
              </Route>
              <Route path='/books'>
                <Books></Books>
              </Route>
              <Route path='/setting'>
                <Setting></Setting>
              </Route>
              <Route path='/'>
                <Main></Main>
              </Route>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
};

export default App;
