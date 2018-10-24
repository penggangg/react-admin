import React, { Component } from 'react';
import axios from 'axios';
import { Table, Icon, Popconfirm, Button } from 'antd';
import CollectionCreateForm from './CustomizedForm.js'
class FormTable extends Component {
    state = {
        sortedInfo: null,
        filteredInfo: null,
        data: [],
        visible: false,
        isUpdate: true
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters
        });
    }
    handleCancle () {
        this.setState({
            visible: false
        })
    }
    handleOk = () => {
        this.form.validateFields((errors, values) => {
            if (!errors) {
                axios.get(this.state.isUpdate? 'http://localhost:3333/updateCustomer' : 'http://localhost:3333/addCustomer', {
                    params: {...this.form.getFieldsValue()}
                })
                .then(res => {
                    console.log(res)
                    this.setState({
                        visible: false
                    })
                    axios.get('http://localhost:3333/customerList')
                    .then(res => {
                        console.log(res)
                        this.setState({
                            data: res.data.customerList
                        })
                    })
                })
            }
        })
    }
    handleDelete = (rowKey,record) => {
        console.log(record)
        axios.get(`http://localhost:3333/deleteCustomer?id=${record.id}`)
        .then(res => {
            axios.get('http://localhost:3333/customerList')
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data.customerList
                })
            })
        })
    }
    saveFormRef = (form) => {
        this.form = form
    }
    edit = (rowkey, record) => {
        this.setState({
            visible: true,
            isUpdate: true
        })
        console.log(this)
        this.form.setFieldsValue({
            ...record
        })
        
    }
    addUser= () => {
        this.form.resetFields()
        this.setState({
            visible: true,
            isUpdate: false
        })
    }
    componentDidMount(){
        axios.get('http://localhost:3333/customerList')
        .then(res => {
            console.log(res)
            this.setState({
                data: res.data.customerList
            })
        })
    }
    render() {
        let { sortedInfo } = this.state;
        sortedInfo = sortedInfo || {};
        // filteredInfo= filteredInfo || {};
        
        const columns = [
            { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left', align: 'center' },
            { title: '性别', width: 100, dataIndex: 'sex', key: 'sex', fixed: 'left', align: 'center' },
            { title: '年龄', dataIndex: 'age', key: 'age', align: 'center', 
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
            },
            { title: '地址', dataIndex: 'address', key: '2', align: 'center' },
            { title: '手机号', dataIndex: 'phone', key: '3', align: 'center' },
            { title: '邮箱', dataIndex: 'email', key: '4', align: 'center' },
            { title: '密码', dataIndex: 'password', key: '5', align: 'center' },
            { title: '创建时间', dataIndex: 'creatTime', key: '6', align: 'center' },
            {
                title: '修改',
                key: 'operation',
                fixed: 'right', 
                width: 100,
                align: 'center',
                render: (text, record, rowkey) =>
                <div className='opera'>
                    <span 
                        style={ { cursor: 'pointer' } }
                        onClick = { ()=>this.edit(rowkey,record) }
                    >
                        <Icon type="edit" /> 修改
                    </span><br />
                    <span style={ { cursor: 'pointer' } }><Popconfirm title="确定要删除吗?" onConfirm={ ()=>this.handleDelete(rowkey,record)} ><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
                </div>
            },
        ];
        return(
            <div>
                <Button style={ { marginBottom: 30 } } onClick={this.addUser} type="primary" icon="user-add">新增</Button>
                <Table bordered columns={columns} rowKey={record => record.id} dataSource={this.state.data} onChange={this.handleChange} scroll={{ x: 1300 }} />
                { this.state.isUpdate? 
                    <CollectionCreateForm ref={(form) => this.form = form} visible={this.state.visible} onCancel={this.handleCancle.bind(this)} onOk={this.handleOk} title="修改信息" okText="更新" /> : <CollectionCreateForm ref={(form) => this.form = form} visible={this.state.visible} onCancel={this.handleCancle.bind(this)} onOk={this.handleOk} title="新增人员" okText="添加" />
                }
            </div>
        );
    }
}
export default FormTable