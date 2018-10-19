import React, { Component } from 'react';
import axios from 'axios';
import { Table, Icon, Popconfirm } from 'antd';
class FormTable extends Component {
    state = {
        sortedInfo: null,
        filteredInfo: null,
        data: []
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters
        });
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
                render: (text, record) =>
                <div className='opera'>
                    <span>
                         <Icon type="edit" /> 修改
                    </span><br />
                    <span><Popconfirm title="确定要删除吗?" ><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
                </div>
            },
        ];
        return(
            <Table bordered columns={columns} dataSource={this.state.data} onChange={this.handleChange} scroll={{ x: 1300 }} />
        );
    }
}
export default FormTable