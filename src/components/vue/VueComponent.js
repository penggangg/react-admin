import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Calculation from './calculation'
import PropsChildren from './propsChildren'
class Clock extends Component {
    render() {
        return (
            <div>
                {this.props.date? this.props.date.toLocaleTimeString(): '123'}
                {this.props.GetChildStates ?
                    <button onClick={ () => this.props.GetChildStates('传的值666')}>子传父</button> : ''
                }
            </div>
        )
    }
}
let dataTitle = {
    m:'需要花多少钱：',
    n:'能买这么多个：'
}
function inputProtected(input){
    if(Number.isNaN(input) || input <= 0){
        return '';
    }else{
        return Math.floor(input).toString();
    }
}
class VueComponent extends Component {
    state = {
        inputVal: 12,
        data: [
            { id: 1, name: 'penggang1' },
            { id: 2, name: 'penggang2' },
            { id: 3, name: 'penggang3' },
            { id: 4, name: 'penggang4' },
        ],
        date: '',
        childState: '',
        type:'money',
        input:''
    }
    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleGetStates = (num) => {
        console.log(888)
        this.setState({
            childState: num
        })
    }
    handleDataChange = (type, e) => {
        if(type === 'money'){
            this.setState({type:'money',input:e.target.value})
        }else if(type === 'number'){
            this.setState({type:'number',input:e.target.value})
        }
    }
    handletestClick = (e,type) => {
        console.log(type)
        console.log(e)
    }
    convertNumber = (input) => {
        return Math.floor(input/200)
    }
    convertMoney = (input) => {
        return input * 200
    }
    render() {
        setTimeout(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
       
        let input = this.state.input;
        let type = this.state.type;
        let number = type==='money'  ? inputProtected(this.convertNumber(input)) : input
        let money  = type==='number' ? inputProtected(this.convertMoney(input)) : input
        return (
            <div>
                 <Row gutter={16}>
                    <Col md={6}>
                        <h2>数据双向绑定</h2>
                        <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
                        <span>绑定的值：{this.state.inputVal}</span>
                        <h2>for 循环</h2>
                        {
                            this.state.data.map((item, key) => { 
                                if (key > 1) {
                                    return (
                                        <div key={key}>
                                            <span>{key}{item.name}</span>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={key}>
                                            <span>'哈哈'{item.name}</span>
                                        </div>
                                    )
                                }
                                
                            })
                        }
                        <h2>向子组件传参</h2>
                        <Clock date={this.state.date} />
                        <h2>向父组件传参{this.state.childState}</h2>
                        <Clock GetChildStates={this.handleGetStates} />
                    </Col>
                    <Col md={6}>
                        <h2>状态提升</h2>
                        <h3>衣服200一件</h3>
                        <Calculation title={dataTitle.m} data={money} type="money" testClick={this.handletestClick} changeData={ (e)=>this.handleDataChange('money',e)} />
                        <Calculation title={dataTitle.n} data={number} type="number" testClick={this.handletestClick} changeData={ (e)=>this.handleDataChange('number', e)} />
                    </Col>
                    <Col md={8}>
                        <h2>this.props.children的使用（相当于vue里的插槽）</h2>
                        <PropsChildren>
                            <h1 className="Dialog-title">
                                Welcome 我是插槽1
                            </h1>
                            <p className="Dialog-message">
                                Thank you for visiting our spacecraft1!
                            </p>
                        </PropsChildren>
                        <PropsChildren>
                            <h1 className="Dialog-title">
                                Welcome 我是插槽2
                            </h1>
                            <p className="Dialog-message">
                                Thank you for visiting our spacecraft2!
                            </p>
                        </PropsChildren>
                    </Col>
                </Row>
            </div> 
        )
    }
}
export default VueComponent