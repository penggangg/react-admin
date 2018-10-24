import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Redirect, Link, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import HeaderCustomer from './HeaderCustomer'
import FormTable from '../form/Form'
import VueComponent from '../vue/VueComponent'
import NoMatch from './404';
import Index from '../index/Index';
import history from './history';
import './App.css'
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline'
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    
    render() {
        let name;
        console.log(history)
        let selectedKey =  history.location.pathname
        if (localStorage.getItem("mspa_user") === null) {
            return <Redirect to="/login"/>
        } else {
            name = JSON.parse(localStorage.getItem("mspa_user")).username;
        }
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    
                    <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
                        <Menu.Item key="/app">
                            <Link to="/app">
                                <Icon type="user" />
                                <span className="nav-text">首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/app/form">
                            <Link to="/app/form">
                                <Icon type="video-camera" />
                                <span className="nav-text">人员信息</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/app/Vue">
                            <Link to="/app/Vue">
                                <Icon type="upload" />
                                <span className="nav-text">Vue模块</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="4">Tom</Menu.Item>
                            <Menu.Item key="5">Bill</Menu.Item>
                            <Menu.Item key="6">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="7">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <HeaderCustomer 
                        collapsed = {this.state.collapsed}
                        userName = {name}
                        toggle = {this.toggle}
                    />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                            <Switch>
                                <Route exact path="/app" component={Index}/>
                                <Route exact path="/app/form" component={FormTable}/>
                                <Route exact path="/app/Vue" component={VueComponent}/>
                                <Route component={NoMatch} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default App;