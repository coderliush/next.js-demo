import React, { Component } from 'react'
import { Modal, Button } from 'antd'

export default class ModalWarn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            onSetup: props.onSetup,
            onCloseWarn: props.onCloseWarn,
        }
    }
    static getDerivedStateFromProps(props) {
        return {
            visible: props.visible
        }
    }
    onCloseWarn = () => {
        this.setState({ visible: false })
    }
    render() {
        const { visible, onSetup, onCloseWarn } = this.state
        return (
            <Modal
                width={640}
                title="温馨提示"
                maskClosable={false}
                wrapClassName="modal-content-normal"
                visible={visible}
                onCancel={onCloseWarn}
                footer={
                    <div>
                        <Button type="primary" onClick={onSetup}>设置</Button>
                        <Button onClick={onCloseWarn}>取消</Button>
                    </div>
                }
            >
                <div style={{ marginBottom: 8 }}>当前还未进行快递打印模板及打印机等默认参数设置，请先设置默认参数。</div>
                <div className="text-warn">播种墙默认4X4，若与实际不符，请到默认参数处进行设置。</div>
            </Modal>
        )
    }
}

