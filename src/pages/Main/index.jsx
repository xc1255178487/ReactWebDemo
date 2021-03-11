import React, { Component } from 'react';
import { Row, Card } from 'antd';
import Icon, {
    FileDoneOutlined,
    FieldTimeOutlined,
    BookOutlined,
} from '@ant-design/icons';
import './main.css';

export default class index extends Component {
    state = {
        head: [
            {
                title: '计划',
                num: 1,
                icon: 'FileDoneOutlined',
                color: '#99CC33'
            },
            {
                title: '任务',
                num: 2,
                icon: 'FieldTimeOutlined',
                color: '#FF9900'
            },
            {
                title: '书本',
                num: 3,
                icon: 'BookOutlined',
                color: '#FFCC00'
            }
        ]
    }
    render() {
        return (
            <div>
                <Row className='main-head'>
                    {
                        this.state.head.map(item => {
                            return <Card style={{width: 28 + '%', backgroundColor: item.color}}>
                                    <div className="head-item">
                                        <div className='head-item-icon'>
                                            <Icon component={item.icon} />
                                        </div>
                                        <div className='head-item-right'>
                                            <span>{item.num}</span>
                                            {item.title}
                                            <Icon component={item.icon} />
                                        </div>
                                    </div>
                                </Card>;
                        })
                    }
                </Row>
            </div>
        )
    }
}
