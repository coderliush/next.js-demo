import React, { Component } from 'react'
// import { FormattedMessage } from 'react-intl';
import { Layout, Card, Row, Col, Form, Input, Badge, Button, message } from 'antd'
import SeedWall from './components/seed-wall'
// import SeedGrid from './components/seed-grid'
// import ModalSetup from '../seed-modal-setup'
// import ModalWarn from '../seed-modal-warn'
// import ModalSendGoods from '../seed-modal-send-goods'
// import ModalAbnormal from '../seed-modal-abnormal'
// import RndGoods from '../seed-popover-goods'

// import Splitter from '../../components/splitter'
import styles from './index.less'
// import "@/assets/less/index.less"

const FormItem = Form.Item
// const formatMessage = (langTextId, langTextVar, type) => {
//     return <FormattedMessage id={langTextId} values={langTextVar} />;
// }

class PrintSeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: 4,  // 播种墙默认行数
            column: 4, // 播种墙默认列数
            disabled: false,   // 是否禁用"打印物流单"按钮
            visibleModalWarn: true,  // 是否展示提示弹框
            visibleModalSendGoods: false, // 是否展示发货单列表弹框
            visibleModalAbnormal: false, // 是否显示异常单据弹框
        }
    }

    static getDerivedStateFromProps(props) {
        return {
            visibleModalSetup: props.visibleModalSetup
        }
    }
    onPressWave = (value) => {   // 对照文档，校验波次的逻辑
        message.error('输入的波次或拣货车号无效，请重新输入！')    // 波次或拣货车号不存在
        message.error('无满足待打印的发货单！')                  // 输入的波次不是“等待播种”状态的波次
        message.error('无满足待打印的发货单！')  
    }
    onPressGoods = () => {
        message.error('商品在系统中不存在，请维护商品信息！')     // 商品不存在
        message.error('输入的商品不是该波次商品，请重新输入！')   // 商品不是该波次
    }
    onCancelSetup = () => { this.props.handleSetup(false) }
    onCloseWarn = () => { this.setState({ visibleModalWarn: false }) }
    onCloseSendGoods = () => { this.setState({ visibleModalSendGoods: false }) }
    onCloseAbnormal = () => { this.setState({ visibleModalAbnormal: false }) }
    onCheck = () => { this.setState({ visibleModalAbnormal: true }) }
    onRePrint = () => { this.setState({ visibleModalSendGoods: true }) }
    onSetup = () => {
        this.setState({ visibleModalWarn: false })
        this.props.handleSetup(true)
    }
    onWallConfig = (values) => {
        this.setState({
            line: values.line,
            column: values.column
        })
    }
    onDisableButton = (bool) => {
        this.setState({ disabled: bool })
    }
    render() {
        const { line, column, visibleModalSetup, visibleModalWarn, visibleModalSendGoods, visibleModalAbnormal, disabled } = this.state
        return (
            <Layout className={styles["seed-layout"]}>
                <Card size="small" className={styles["card-header"]}>
                    <Row>
                        <Form layout="inline" className={styles["seed-form"]}>
                            <Col span={6} className={styles["col-first"]}>
                                <FormItem
                                    colon={false}
                                    label={<Badge className={styles["badge"]} color="#E97050" text="波次"></Badge>}
                                >
                                    <Input className={styles["input-seed"]} onPressEnter={this.onPressWave} autoFocus="autofocus" />
                                </FormItem>
                            </Col>
                            <Col span={4} className={styles["col-second"]}>
                                <div className={styles["font-18"], styles["text-bold"]}>波次类型：</div>
                                <div className={styles["wave-type"]}>一单一品</div>
                            </Col>
                            <Col span={6} className={styles["col-third"]}>
                                <FormItem
                                    colon={false}
                                    label={<Badge className={styles["badge"]} color="#E97050" text="商品"></Badge>}
                                >
                                    <Input className={styles["input-seed-second"]} onPressEnter={this.onPressGoods} />
                                </FormItem>
                            </Col>
                            <Col span={4} className={styles["col-four"]}>
                                <div className={styles["font-18"], styles["text-bold"], styles["mb-10"]} style={{ fontSize: 18 }}>订单数量：</div>
                                <div className={styles["font-18"], styles["text-bold"]} style={{ fontSize: 18 }}>商品数量：</div>
                            </Col>
                            <Col span={4} className={styles["col-five"]}>
                                <Badge color="#E97050" className={styles["badge"]} text="当前格子"></Badge>
                                <div className={styles["number"]}>10</div>
                            </Col>
                        </Form>
                    </Row>
                </Card>

                <Card size="small" className={styles["card-body"]}>
                    <SeedWall line={line} column={column} />
                    {/* <Splitter primaryIndex={0} secondaryInitialSize={800} storageName="seed-body-splitter">
                        <SeedWall line={line} column={column} />
                        <SeedGrid />
                    </Splitter>  */}
                </Card>
                <Card size="small" className={styles["card-footer"]}>
                    <Row>
                        <Col span={9} className={styles["left-text"]}>
                            <div className={styles["text-warn"]} style={{ whiteSpace: "nowrap", fontWeight: 'bold' }}>说明：</div>
                            <div className={styles["text-bold"]}>未进行播种操作的格子：灰色；正在播种的格子：橙色；播种完成无异常的格子：绿色；发货单异常的格子：红色。</div>
                        </Col>
                        <Col className={styles["right-group"]} span={14}>
                            <Button className={styles["button-default"]} onClick={this.onRePrint}>重新打印</Button>
                            <Button className={styles["button-default"]} onClick={this.onCheck}>复核</Button>
                            <Button type="primary">结束波次</Button>
                            <Button type="primary">打印发货单</Button>
                            <Button type="primary" disabled={disabled}>打印物流单</Button>
                        </Col>
                    </Row>
                </Card>

                {/* 默认参数设置弹框 */}
                {/* <ModalSetup visible={visibleModalSetup} onCancelSetup={this.onCancelSetup} onWallConfig={this.onWallConfig} onDisableButton={this.onDisableButton} />    */}
                 {/* 温馨提示弹框 */}
                {/* <ModalWarn visible={visibleModalWarn} onCloseWarn={this.onCloseWarn} onSetup={this.onSetup} />   */}
                {/* 发货单列表弹框 */}
                {/* <ModalSendGoods visible={visibleModalSendGoods} onCloseSendGoods={this.onCloseSendGoods} />  
                <ModalAbnormal visible={visibleModalAbnormal} onCloseAbnormal={this.onCloseAbnormal} /> */}
                {/* <RndGoods />   */}
            </Layout >
        )
    }
}

export default Form.create()(PrintSeed)