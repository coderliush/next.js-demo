import React, { Component } from 'react'
import { Modal, InputNumber, Button, Form } from 'antd'
import './index.less'

const FormItem = Form.Item
class ValideModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focusIndex: 1,  // 当前焦点的索引， 默认从第一个开始
            visibleWarn: false,
            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: false,
        }

        for (let i = 1; i <= 4; i++) {
            this[`input${i}`] = React.createRef()
        }
        this.getRandomNumber()
    }
    static getDerivedStateFromProps(props) {
        return {
            visible: props.visible,
            onCancel: props.onCancel,
        }
    }
    getRandomNumber = () => {
        this.numberList = []
        for (let i = 0; i <= 3; i++) {
            this.numberList.push(Math.floor(Math.random() * 10))
        }
    }
    onChange = (value, index) => {
        let that = this
        if (value !== this.numberList[index-1]) {
            document.querySelector(`.input${index}`).classList.add('error')
            for (let i = 1; i <= 4; i++) {
                if (index !== i) {
                    this.setState({ [`disabled${i}`]: true})
                }
            }
        } else {
            for (let i = 1; i <= 4; i++) {
                this.setState({ [`disabled${i}`]: false})
            }
        }

        if (index === 4) return  // 最后一个 input 不添加焦点。
        this.setState({ focusIndex: index + 1 }, () => {
            that[`input${this.state.focusIndex}`].current.inputNumberRef.focus()
        })
    }
    inputGroup = () => {
        const { getFieldDecorator } = this.props.form
        let arr = [] 
        for (let i = 1; i <= 4; i++) {
            arr.push(
                <FormItem key={i}>
                    {
                        getFieldDecorator(`value${i}`)(
                            <InputNumber className={`input${i}`} disabled={this.state[`disabled${i}`]} max={9} onChange={(e) => this.onChange(e, i)} ref={this[`input${i}`]} autoFocus={i === 1 ? true : false} />
                        )
                    }
                </FormItem>

            )
        }
        return <Form className="input-group" layout="inline">{arr}</Form>
    }
    onValide = () => {
        const inputValues = this.props.form.getFieldsValue()
        if (Object.values(inputValues).join('') === this.numberList.join('')) {
            console.log('相等')
            this.props.onCancel()
        } else {
            this.setState({ visibleWarn: true })
            alert('不相等')
        }
    }
    render() {
        const { visible, onCancel } = this.state
        return (
            <Modal
                width={640}
                maskClosable={false}
                title="打印物流单"
                wrapClassName="modal-valide-number modal-content-normal"
                destroyOnClose={true}
                visible={visible}
                onCancel={onCancel}
                footer={
                    <div>
                        <Button onClick={this.onValide} type="primary">确认</Button>
                        <Button onClick={onCancel}>取消</Button>
                    </div>
                }
            >
                <p>所选单据已打印过物流单，是否确认需要重新打印？若需要重新打印，请输入以下验证码点击“确认”按钮。</p>
                <div className="number">{this.numberList.join('')}</div>
                {this.inputGroup()}
            </Modal>
        )
    }
}

export default Form.create()(ValideModal)