import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button } from 'antd'
import Modal from '../../../../components/modal'
import ModalValide from '../seed-modal-print-logistics'
// import minColumns from './config'
const AgGrid =  dynamic(import('../../../../components/ag-grid'), {
    ssr: false
})
import './index.less'

const minColumns = [{
    headerName: "",
    colId: "rowNum",
    valueGetter: function (params) {
        let num = '' + (params.node.rowIndex + 1)
        return num.length < 2 ? '0' + num : num;
    },
    width: 45,
    filter: false,
    lockPosition: true,
    lockPinned: true,
    pinned: 'left'
}, {  
    width: 50,
    filter: false,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    lockPosition: true,
    lockPinned: true,
    pinned: 'left'
}]

const columnList = [{
    headerName: '格子号',
    field: 'noPickNumber',
}, {
    headerName: '发货单号',
    field: 'deliveryOrderWaveState',
    cellRendererFramework: params => {
        return <p style={{color: '#0265FF'}}>{params.value}</p>
    },
}, {
    headerName: '物流单打印',
    field: 'expressId',
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
}, {
    headerName: '异常信息',
    filter: true,
    field: 'expressId',
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
    width: 65,
}]

for (let item of columnList) {
    minColumns.push({
        headerName: item['headerName'],
        field: item['field'],
        filter: item.filter,
        cellRenderer: item['cellRenderer'],
        cellRendererFramework: item['cellRendererFramework'],
        width: item.width || 100
    })
}

class ModalSendGoods extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.modal = React.createRef()
    }
    static getDerivedStateFromProps(props) {
        return {
            seed: props.seed,
            visibleModalReStart: props.visible
        }
    }
    onPrintInvoice = (bool) => {
        this.setState({ visibleModalValide: bool })
    }
    getColumn = () => {
        let that = this
        let Col = minColumns.find(item => item.field === 'handle')
        Col.cellRendererFramework = params => {
            return (
               <p style={{color: '#2F80FF'}}>移出</p>
            )
        }
        return minColumns
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:9090/tc/delivery/delivery_wave/data/list', {
            pageNo: 1,
            lastName: 50,
            headers: { 
                Cookie: '_ati=2589300460228; ERPLanguage=zh; JSESSIONID=2376B922B3A11CD447E2EE8E09D900A8-n2'}
        }).then(res => {
            this.setState({ seedGoodsData: res.data })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
            return;
          };
    }
    render() {
        const { visibleModalValide, visibleModalReStart, seed, seedGoodsData } = this.state
        return (
            <Modal
                width={1016}
                title="发货单列表"
                maskClosable={false}
                wrapClassName="modal-send-goods modal-content-grid"
                visible={visibleModalReStart}
                onCancel={() => this.props.onCloseSendGoods()}
                ref={this.modal}
                footer={[
                    <Button key="goods" onClick={() => this.onPrintInvoice(true)}>打印发货单</Button>,
                    <Button key="server" type="primary" onClick={this.logistics}>打印物流单</Button>
                ]}
            >
                <div className="goods-ag-grid-wrap">
                    <AgGrid
                        rowData={seedGoodsData ? seedGoodsData.rows : []}
                        columnDefs={this.getColumn()}
                        pagination={{pageSize:10, page:1, total: 10}}
                    />
                </div>
                <ModalValide visible={visibleModalValide} onCancel={() => this.onPrintInvoice(false)} />
            </Modal>
        )
    }
}

export default ModalSendGoods

