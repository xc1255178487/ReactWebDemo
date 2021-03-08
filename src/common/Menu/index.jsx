import React, { Component } from 'react'
import { Menu } from 'antd';
import {
    HomeOutlined,
    LikeOutlined,
    HeartOutlined,
    BookOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
export default class App extends Component {  
    render() {
      return (
        <div style={{ width: 200 }}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={false}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to='/index'>首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LikeOutlined />}>
                <Link to='/ability'>能力</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<HeartOutlined />}>
                <Link to='/like'>爱好</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BookOutlined />} title="读书">
              <Menu.Item key="5">
                <Link to='/books'>读过的书</Link>
              </Menu.Item>
              <Menu.Item key="6">想读的书</Menu.Item>
              <Menu.Item key="7">自己的书</Menu.Item>

            </SubMenu>
            <SubMenu key="sub2" icon={<SettingOutlined />} title="设置">
              <Menu.Item key="9">
                <Link to='/setting'>主题</Link>
              </Menu.Item>
              <Menu.Item key="10">设置</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      );
    }
  }
