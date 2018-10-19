import React, { Component } from 'react';
import { Card, Row, Col, Progress, Timeline, Collapse, Input } from 'antd';
import './index.less';

const Panel = Collapse.Panel;
const classify = [
    "社会",
    "爱情",
    "友情"
];
const text = [
    "只有人们的社会实践，才是人们对于外界认识的真理性的标准。真理的标准只能是社会的实践。",
    "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。",
    "友谊是灵魂的结合，这个结合是可以离异的，这是两个敏感，正直的人之间心照不宣的契约。"
];
const author = [
    " —— 毛泽东",
    " —— 歌德",
    " —— 伏尔泰"
];

class Index extends Component {
    state = {
        msg: '数据双向绑定的值'
    }
    change(event) {
        this.setState({msg: event.target.value}) 
    }
    change1() {
        console.log(this)
        console.log('1231232')
    }
    Panel(){
        let panel = text.map(function(item,index){
            return(
                <Panel header={classify[index]} key={index}>
                    <div>{item}</div>
                    <p className="author">{author[index]}</p>
                </Panel>
            )
        });
        return panel;
    }
    render() {
        return(
            <div>
                <Row gutter={16}>
                    <Col md={6}>
                        <Input placeholder="default size" value={this.state.msg} onChange={this.change.bind(this)} />
                    </Col>
                    <Col md={6}>
                        <span onClick={this.change1.bind(this)}>测试数据双向绑定：{this.state.msg}</span>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col md={8}>
                        <Card 
                            style={{marginBottom:16}}
                            bodyStyle={{height:'407px', overflow:'hidden'}}
                        >
                            <div>
                                <h3>项目进度</h3>
                                <div>xxx项目</div>
                            </div>
                            <div className='pro'>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <div>项目1</div>
                                        <Progress type="dashboard" percent={25} width={125} id='pro1'/>
                                    </Col>
                                    <Col span={12}>
                                        <div>项目2</div>
                                        <Progress type="dashboard" percent={50} width={125} id='pro2'/>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <div>项目3</div>
                                        <Progress type="dashboard" percent={75} width={125} id='pro3'/>
                                    </Col>
                                    <Col span={12}>
                                        <div>项目4</div>
                                        <Progress type="circle" percent={100} width={125} id='pro4'/>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card 
                            style={{marginBottom:16}}
                            bodyStyle={{height:'407px', overflow:'hidden'}}>
                            <div>
                                <h3>项目流程</h3>
                            </div>
                            <div className="timeline">
                                <Timeline>
                                    <Timeline.Item color="green">
                                        <div  className="timeItem">创建项目 - 2017-10-01</div>
                                        <div  className="timeItem">搭建UI框架 - 2017-10-02</div>
                                        <div  className="timeItem">对接协议 - 2017-10-04</div>
                                        <div  className="timeItem">实现功能 - 2017-10-05</div>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <div  className="timeItem">通信调试 - 2017-10-10</div>
                                        <div  className="timeItem">功能测试 - 2017-10-11</div>
                                        <div  className="timeItem">错误调试 - 2017-10-13</div>
                                    </Timeline.Item>
                                    <Timeline.Item color="blue">
                                        <div  className="timeItem">界面优化 - 2017-10-15</div>
                                        <div  className="timeItem">性能优化 - 2017-10-17</div>
                                        <div  className="timeItem">发布版本 - 2017-10-20</div>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card
                            style={{marginBottom:16}}
                            bodyStyle={{height:'407px', overflow:'hidden'}}>
                            <div>
                                <h3>人生感悟</h3>
                            </div>
                            <div className="collapse">
                                <Collapse accordion defaultActiveKey={"0"}>
                                    {this.Panel()}
                                </Collapse>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Index