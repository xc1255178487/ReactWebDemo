import React, { Component } from 'react';
import { Layout } from 'antd';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Header.css';
const {Header} = Layout;
const menu = (
    <Menu>
      <Menu.Item key="0">
        个人信息
      </Menu.Item>
      <Menu.Item key="1">
       设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">退出</Menu.Item>
    </Menu>
  );
export default class index extends Component {
    render() {
        return (
            <Header className='header'>
                <div>
                    xcc-react-demo
                </div>
                <div>
                    <Dropdown arrow={false} overlay={menu} trigger={['click']}>
                        <div>
                            <Avatar size={32} style={{marginRight: '10px'}} icon={<UserOutlined />} />
                            暗影刀客
                        </div>
                    </Dropdown> 
                </div>
            </Header>
        )
    }
}
