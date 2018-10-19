import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
// import { Link } from 'react-router-dom';
import history from './history';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderCustomer extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.logout = this.logout.bind(this);
    }
    logout(){
        localStorage.removeItem("mspa_user");
        history.push('/login');
    }
    render() {
        return (
            <Header style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                        style={{cursor: 'pointer'}}
                    />
                </span>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px'}}
                >
                    {/* <Menu.Item key="schedule">
                        <Link to="/app/header/Calendars">
                            <Badge count={3} overflowCount={99} style={{height:'15px',lineHeight:'15px'}}>
                                <Icon type="schedule" style={{fontSize:16, color: '#1DA57A' }}/>
                            </Badge>
                        </Link>
                    </Menu.Item> */}
                    <SubMenu 
                        title={<span>
                            <Icon type="user" style={{fontSize:16, color: '#1DA57A' }}/>{this.props.userName}
                        </span>}
                        >
                        <Menu.Item key="logout" style={{textAlign:'center'}} className="logout">
                            <span onClick={this.logout}>logout</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}
export default HeaderCustomer