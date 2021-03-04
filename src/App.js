import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Header from './common/Header/index';
import Menu from './common/Menu';
import React, {Component} from 'react';
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
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
};

export default App;
