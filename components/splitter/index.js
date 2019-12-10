import SplitterLayout from 'react-splitter-layout'
import 'react-splitter-layout/lib/index.css'
import React, { Component } from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.less'

const splitterLineSize = 16,
    // 缓存中的标识，含有'disabledDrag'时只有主板块
    disabledDrag = 'disabledDrag';

export default class Splitter extends Component {
    static defaultProps = {
        storageName: null,
        primaryIndex: 0,      // 默认主板块是第一个
        primaryMinSize: 40,   // 默认主板块最小尺寸
        secondaryMinSize: 40, // 默认次板块最小尺寸
        vertical: false,      // 默认水平方向
        showFold: false,      // 是否需要折叠区域，默认不显示
    }
    constructor(props) {
        super(props)
        props.showFold ? this.foldSize = 26 : this.foldSize = 0
        this.state = {
            primaryMinSize: props.primaryMinSize,
            secondaryMinSize: props.secondaryMinSize,
            // 次板块的索引。默认左边为主板块0， 右边为次板块1。通过修改 width 属性修改两块的大小，width 属性始终在次板块上 
            secondaryIndex: this.secondaryIndex(),
            secondaryInitialSize: this.getInitSize(),
            // 当折叠时显示，展开时不显示。
            // visibleFold: false,
            // 是否显示次板块内容 
            visibleContent: true,
        }
        this.splitter = React.createRef()
    }
    secondaryIndex = () => {
        let secondaryIndex
        this.props.primaryIndex === 0 ? secondaryIndex = 1 : secondaryIndex = 0
        return secondaryIndex
    }
    // {return} 返回次板块的值
    // 1. if 当存储的值存在且包含'disabledDrag'，此时次板块尺寸为0，需要禁止拖拽
    // 2. elseif 存储的值存在，取值
    // 3. elseif 当父组件传默认值，取父组件的值
    // 4. 父组件没有默认值，返回 undefined
    getInitSize = () => {
        this.storageValue = localStorage.getItem(this.props.storageName)
        const { secondaryInitialSize } = this.props
        if (this.storageValue && this.storageValue.includes(disabledDrag)) {
            this.disabledDrag = true
            return this.foldSize
        } else if (this.storageValue) {
            return parseInt(this.storageValue)
        } else if (secondaryInitialSize) {
            return parseInt(secondaryInitialSize)
        } else {
            return undefined
        }
    }
    addButtonEvent = () => {
        let direction, opposite
        const { vertical } = this.props
        const { secondaryIndex } = this.state
        if (vertical) {
            if (secondaryIndex === 1) {
                if (this.storageValue && this.storageValue.includes(disabledDrag)) {
                    direction = 'top'
                    opposite = 'bottom'
                } else {
                    direction = 'bottom'
                    opposite = 'top'
                }
            } else if (secondaryIndex === 0) {
                if (this.storageValue && this.storageValue.includes(disabledDrag)) {
                    direction = 'bottom'
                    opposite = 'top'
                } else {
                    direction = 'top'
                    opposite = 'bottom'
                }
            }
            // 垂直预览的 className
            this.previewClassName = 'preview-secondaryDom-vertical'
            this.splitterButton.onclick = () => this.onSplitterButton(direction, opposite)
        } else {
            if (secondaryIndex === 1) {
                if (this.storageValue && this.storageValue.includes(disabledDrag)) {
                    direction = 'left'
                    opposite = 'right'
                } else {
                    direction = 'right'
                    opposite = 'left'
                }
            } else if (secondaryIndex === 0) {
                if (this.storageValue && this.storageValue.includes(disabledDrag)) {
                    direction = 'right'
                    opposite = 'left'
                } else {
                    direction = 'left'
                    opposite = 'right'
                }
            }
            // 水平预览的 className
            this.previewClassName = 'preview-secondaryDom-horizontal'
            this.splitterButton.onclick = () => this.onSplitterButton(direction, opposite)
        }
        this.splitterButton.classList.add(direction)
    }
    onSplitterButton = (direction, opposite) => {
        const { storageName } = this.props
        const { visibleFold, visibleContent } = this.state
        this.setState({ visibleFold: !visibleFold, visibleContent: !visibleContent })

        if (this.secondaryDom.style[this.size] === `${this.foldSize}px`) {
            this.disabledDrag = false
            this.secondaryDom.style[this.size] = `${this[`secondary${this.upSize}`]}px`  // this.secondaryWidth, this.secondaryHeight
            this.splitterLine.style.cssText = 'pointer-events: auto'
        } else {
            this.disabledDrag = true
            // 存储次板块宽度，折叠宽度设置为提示面板的宽度
            this[`secondary${this.upSize}`] = parseInt(this.secondaryDom.style[this.size])
            // 收起次板块时保存尺寸，用于初次渲染时还原
            storageName && localStorage.setItem(storageName, `${this[`secondary${this.upSize}`]}${disabledDrag}`)
            this.secondaryDom.style[this.size] = `${this.foldSize}px`
            this.splitterLine.style.cssText = 'pointer-events: none'
            this.splitterButton.style.cssText = 'pointer-events: auto'
            // fix：修改宽度为0，调整浏览器高度后，次板块宽度会改变为最小宽度。
            this.setState({ secondaryMinSize: this.foldSize })
        }

        this.secondaryDom.classList.remove(this.previewClassName)
        this.splitterButton.classList.remove(direction)
        this.splitterButton.classList.add(opposite)
        this.splitterButton.onclick = () => this.onSplitterButton(opposite, direction)

    }
    onFold = (direction) => {
        const { visibleContent } = this.state
        this.setState({ visibleContent: !visibleContent })
        // 当次板块内容显示时，点击折叠收起内容。尺寸等于折叠面板
        if (visibleContent) { 
            this.secondaryDom.style.cssText = `${this.size}: ${this.foldSize}px`
            setTimeout(() => {
                this.secondaryDom.classList.remove(this.previewClassName)
            })
        } else { // 当次板块内容不显示时，点击展开显示内容。尺寸还原
            this.secondaryDom.classList.add(this.previewClassName)
            this.secondaryDom.style.cssText = `${this.size}: ${this[`secondary${this.upSize}`]}` // width: this.secondaryWidth
        }
        // 设置展开时预览窗口的位置
        document.querySelector(`.${this.previewClassName}`).style[`${direction}`] = 0   
    }
    // fix：解决不可拖拽时，按钮可拖拽的问题
    onDragStart = () => {
        let primaryMinSize, secondaryMinSize
        // 当分割线不可拖拽时，设置主板块和次板块的最小尺寸，使之拖不动
        if (this.disabledDrag) {
            primaryMinSize = this.splitterSize - splitterLineSize - this.foldSize
            secondaryMinSize = this.foldSize
        } else {
            primaryMinSize = this.props.primaryMinSize
            secondaryMinSize = this.props.secondaryMinSize
        }
        this.setState({ primaryMinSize, secondaryMinSize })
        this.props.onDragStart && this.props.onDragStart()
    }
    getSplitterSize = () => {
        this.splitterSize = this.splitter.current.container[`client${this.upSize}`]
        // 不能拖动时，次板块是0，
        if (this.storageValue && this.storageValue.includes(disabledDrag)) {
            // fix: 设置次板块最小尺寸解决改变页面高度位置变化的问题
            this.setState({
                secondaryMinSize: this.foldSize,
                visibleContent: false,
            })
            // 设置缓存中的尺寸用于还原
            this[`secondary${this.upSize}`] = parseInt(this.storageValue)
            this.splitterLine.style.cssText = 'pointer-events: none'
            this.splitterButton.style.cssText = 'pointer-events: auto'
        }
    }
    setGlobalVar = () => {
        const { vertical } = this.props
        const { secondaryIndex } = this.state
        if (vertical) {
            this.size = 'height'
            this.upSize = 'Height'
        } else {
            this.size = 'width'
            this.upSize = 'Width'
        }
        // 将分割线上的按钮 push 到分割线中
        this.splitterLine = document.querySelector('.layout-splitter')
        this.secondaryDom = document.querySelectorAll('.layout-pane')[secondaryIndex]
        let img = document.createElement('img')
        img.className = 'splitter-button'
        // img.src = require('/static/splitter-button.svg')
        this.splitterLine.appendChild(img)
        this.splitterButton = document.querySelector('.splitter-button')
        this.addButtonEvent()
    }
    isVisibleFold = () => {
        this.storageValue = localStorage.getItem(this.props.storageName)
        if (this.storageValue && this.storageValue.includes(disabledDrag)) {
            this.setState({ visibleFold: true })
        } else {
            this.setState({ visibleFold: false })
        }
    }
    componentDidMount() {
        this.setGlobalVar()
        // 获取主板块次板块分割线一共占据的尺寸   
        this.getSplitterSize()
        this.isVisibleFold()
    }
    componentWillUnmount() {
        const { storageName } = this.props
        // disabledDrag 用来标识次板块尺寸为 0，此时 1. 保存上次的尺寸用于还原。2. 分割线不可拖拽。
        if (storageName) {
            if (this.secondaryDom.style[this.size] === `${this.foldSize}px`) {
                localStorage.setItem(storageName, `${this[`secondary${this.upSize}`]}${disabledDrag}`)
            } else {
                localStorage.setItem(storageName, this.secondaryDom.style[this.size])
            }
        }
    }
    render() {
        const { vertical, foldText, showFold } = this.props
        const { primaryMinSize, secondaryMinSize, secondaryInitialSize, secondaryIndex, visibleFold, visibleContent } = this.state
        const childrenArr = React.Children.toArray(this.props.children)
        const itemClassNames = classNames(styles['splitter-item'], vertical ? styles['splitter-vertical'] : styles['splitter-horizontal'])
        // 主板块内容一直显示；当点击收齐时，次板块内容不显示。
        const visibleChildren0 = (secondaryIndex === 1 || (secondaryIndex === 0 && visibleContent))
        const visibleChildren1 = (secondaryIndex === 0 || (secondaryIndex === 1 && visibleContent))
        return (
            <SplitterLayout
                {...this.props}
                primaryMinSize={primaryMinSize}
                secondaryMinSize={secondaryMinSize}
                secondaryInitialSize={secondaryInitialSize}
                onDragStart={this.onDragStart}
                customClassName={this.props.customClassName ? `splitter-componented ${this.props.customClassName}` : 'splitter-componented'}
                ref={this.splitter}
            >
                <div className={itemClassNames}>
                    {
                        showFold
                        &&
                        <>
                            {secondaryIndex === 0 && visibleFold && !vertical && <div className="fold-panel fold-panel-left" onClick={() => this.onFold('left')}>
                                <Icon type="double-right" />
                                {foldText && <p>{foldText}</p>}
                            </div>}
                            {secondaryIndex === 0 && visibleFold && vertical && <div className="fold-panel fold-panel-top" onClick={() => this.onFold('top')}>
                                <Icon type="double-right" />
                                {foldText && <p>{foldText}</p>}
                            </div>}
                        </>
                    }
                    {visibleChildren0 && childrenArr[0]}
                </div>
                <div className={itemClassNames}>
                    {visibleChildren1 && childrenArr[1]}
                    {
                        showFold
                        &&
                        <>
                            {secondaryIndex === 1 && visibleFold && !vertical && <div className="fold-panel fold-panel-right" onClick={() => this.onFold('right')}>
                                <Icon type="double-left" />
                                {foldText && <p>{foldText}</p>}
                            </div>}
                            {secondaryIndex === 1 && visibleFold && vertical && <div className="fold-panel fold-panel-bottom" onClick={() => this.onFold('bottom')}>
                                <Icon type="double-left" />
                                {foldText && <p>{foldText}</p>}
                            </div>}
                        </>
                    }
                </div>
            </SplitterLayout>
        );
    }
}

Splitter.propTypes = {
    showFold: PropTypes.bool,
    storageName: PropTypes.string,
    foldText: PropTypes.string,
}
