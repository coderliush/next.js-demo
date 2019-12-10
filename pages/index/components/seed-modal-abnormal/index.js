import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Popover, Table, Icon } from 'antd'
import Modal from '../../../../components/modal'
// import minColumns from './config'
const AgGrid = dynamic(import('../../../../components/ag-grid'), {
    ssr: false
})
import './index.less'

const dataSource = [{
    key: 'a',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
}, {
    key: 'b',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
}, {
    key: 'c',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
}]

const columns = [{
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '商品规则名称',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '商品条码',
    dataIndex: 'address',
    key: 'addressa',
}, {
    title: '商品图片',
    dataIndex: 'address',
    key: 'addressb',
}, {
    title: '需播数量',
    dataIndex: 'address',
    key: 'addressc',
}, {
    title: '已播数量',
    dataIndex: 'address',
    key: 'addressd',
}
]

const minColumns = [{
    headerName: "",
    colId: "rowNum",
    valueGetter: function (params) {
        let num = '' + (params.node.rowIndex + 1)
        return num.length < 2 ? '0' + num : num;
    },
    width: 45,
    filter: false,
}]

const columnList = [{
    headerName: '格子号',
    field: 'noPickNumber',
    filter: false,
}, {
    headerName: '发货单号',
    field: 'deliveryOrderWaveState',
    filter: false,
    cellRendererFramework: params => {
        return <p style={{color: '#0265FF'}}>{params.value}</p>
    }
}, {
    headerName: '物流单打印',
    field: 'expressId',
    filter: false,
    cellRendererFramework: params => {
        if (params.value) {
            return <Icon type = "check"
            style = {
                {
                    color: '#2BD3A8'
                }
            }
            />
        }
    }
}, {
    headerName: '已播/需播',
    field: 'deliveryOrderWaveType',
    filter: false,
}, {
    headerName: '异常信息',
    field: 'expressId',
    filter: true,
    cellRendererFramework: params => {
        return <p style={{color: '#EB8E76'}}>{params.value}</p>
    }
}, {
    headerName: '买家留言',
    field: 'expressId',
    filter: true,
}, {
    headerName: '卖家备注',
    field: 'expressId',
    filter: true,
}, {
    headerName: '物流公司',
    field: 'expressId', 
    filter: true,
}, {
    headerName: '操作',
    field: 'handle',
    width: 70,
    filter: false,
}]

for (let item of columnList) {
    minColumns.push({
        headerName: item['headerName'],
        field: item['field'],
        filter: item.filter,
        cellRenderer: item['cellRenderer'],
        cellRendererFramework: item['cellRendererFramework'],
        width: item.width || 105
    })
}

class Detail extends Component {
    render() {
        return <Table className="abnormal-detail-column" rowClassName="abnormal-detail-row" dataSource={dataSource} columns={columns} pagination={false} />
    }
}

// @connect(
//     (seed) => (seed),
//     dispatch => ({
//         querySeedGoods: payload => dispatch({ type: 'seed/querySeedGoods', payload }),
//     })
// )

class ModalAbnormal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.modal = React.createRef()
    }
    static getDerivedStateFromProps(props) {
        return {
            seed: props.seed,
            visibleModalAbnormal: props.visible
        }
    }
    getColumn = () => {
        let handle = minColumns.find(item => item.field === 'handle')
        let popover = minColumns.find(item => item.field === 'deliveryOrderWaveType')
        handle.cellRendererFramework = params => {
            return (
                <p style={{ color: '#2F80FF' }}>移除</p>
            )
        }
        popover.cellRendererFramework = params => {
            return (
                <Popover overlayClassName="abnormal-popover" trigger="click" content={<Detail />}>
                    <p style={{ color: '#2F80FF' }}>123</p>
                </Popover>
            )
        }
        return minColumns
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:9090/tc/delivery/delivery_wave/data/list', {
            pageNo: 1,
            lastName: 50,
            headers: {
                Cookie: '_ati=2589300460228; ERPLanguage=zh; JSESSIONID=2376B922B3A11CD447E2EE8E09D900A8-n2'
            }
        }).then(res => {
            this.setState({ seedGoodsData: res.data })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        const { seed, visibleModalAbnormal, seedGoodsData } = this.state
        return (
            <Modal
                width={1016}
                title="异常单据"
                maskClosable={false}
                wrapClassName="modal-send-goods modal-content-grid"
                visible={visibleModalAbnormal}
                onCancel={() => this.props.onCloseAbnormal()}
                ref={this.modal}
                footer={[
                    <Button key="end" type="primary" onClick={() => this.onPrintInvoice(true)}>结束波次</Button>,
                    <Button key="close" onClick={() => this.props.onCloseAbnormal()}>关闭</Button>
                ]}
            >
                <div className="goods-ag-grid-wrap">
                    <AgGrid
                        rowData={seedGoodsData ? seedGoodsData.rows : []}
                        columnDefs={this.getColumn()}
                        pagination={{ pageSize: 10, page: 1, total: 10 }}
                    />
                </div>
            </Modal>
        )
    }
}

export default ModalAbnormal

