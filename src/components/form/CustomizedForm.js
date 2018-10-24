import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 }
}
class CustomizedForm extends React.Component {
    constructor(props) {
        super(props);
        console.log();
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                visible={this.props.visible}
                title={this.props.title}
                okText={this.props.okText}
                onCancel={this.props.onCancel}
                onOk={this.props.onOk}
                centered
            >
                <FormItem style={ { display: 'none' } } {...formItemLayout} label="ID">
                    {getFieldDecorator('id')(
                        <Input placeholder="Please input your name" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="姓名">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: 'Please input your name'
                        }]
                    })(
                        <Input placeholder="Please input your name" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="性别">
                    {getFieldDecorator('sex', {
                        rules: [{
                            required: true,
                            message: 'Please select your sex!'
                        }]
                    })(
                        <Select
                            placeholder="请选择性别"
                            style={{ width: 200 }}
                        >
                            <Option value="1">男</Option>
                            <Option value="0">女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="年龄">
                    {getFieldDecorator('age', {
                        rules: [{
                            pattern: /^[1-9]\d*$/, message: "请输入正确的年龄！"
                        },{
                            required: true,
                            message: 'Please input your age'
                        }]
                    })(
                        <Input placeholder="Please input your age" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="地址">
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true,
                            message: 'Please input your address'
                        }]
                    })(
                        <Input placeholder="Please input your address" />
                    )}
                </FormItem>
                <FormItem label="手机号" {...formItemLayout}>
                    {getFieldDecorator('phone', {
                        rules: [{
                            pattern: /^1(3|4|5|7|8)\d{9}$/, message: "手机号码格式不正确！"
                        },{
                            required: true, message: '请输入手机号！'
                        }],
                    })(
                        <Input addonBefore={"+86"} placeholder="Please input phone" style={ { width: 200 } } />
                    )}
                </FormItem>
                <FormItem label="邮箱" {...formItemLayout}>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '邮箱格式不正确！',
                        }, {
                            required: true, message: '请输入邮箱！',
                        }],
                    })(
                        <Input placeholder="Please input your email" />
                    )}
                </FormItem>
                <FormItem label="密码" {...formItemLayout}>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码'
                        }]
                    })(
                        <Input type="password" placeholder="Please input your password" />
                    )}
                </FormItem>
                <FormItem label="确认密码" {...formItemLayout}>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请确认密码'
                        }, {
                            validator: this.compareToFirstPassword
                        }]
                    })(
                        <Input type="password" placeholder="Please input your password" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="创建时间">
                    {getFieldDecorator('creatTime', {
                        rules: [{
                            required: true,
                            message: 'Please input your creatTime'
                        }]
                    })(
                        <Input placeholder="Please input your creatTime" />
                    )}
                </FormItem>
            </Modal>
        )
    }
}
const CollectionCreateForm = Form.create()(CustomizedForm);
export default CollectionCreateForm;