import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { Popover, Icon } from 'antd'
import axios from 'axios'

import './index.less'
const AgGrid =  dynamic(import('../../../../components/ag-grid'), {
    ssr: false
})

const minColumns = []

const columnList = [{
    headerName: '格子号',
    field: 'noPickNumber',
    filter: false,
},
{
    headerName: '已播/需播',
    field: 'deliveryOrderWaveState',
    filter: false,
},
{
    headerName: '商品图片',
    field: 'expressId',
    filter: false,
},
{
    width: 230,
    headerName: '商品名称',
    field: 'deliveryOrderWaveType',
    filter: true,
}, {
    headerName: '商品条码',
    field: 'expressId',
    filter: false,
}]

for (let item of columnList) {
    minColumns.push({
        headerName: item['headerName'],
        field: item['field'],
        filter: item.filter,
        cellRenderer: item['cellRenderer'],
        cellRendererFramework: item['cellRendererFramework'],
        width: item.width || 136
    })
}
// @connect(
//     (seed) => (seed),
//     dispatch => ({
//         queryHomeGrid: payload => dispatch({ type: 'seed/queryHomeGrid', payload }),
//     })
// )
class SeedGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static getDerivedStateFromProps(props) {
        return {
            seed: props.seed
        }
    }
    getColumn = () => {
        let Col = minColumns.find(item => item.field === 'expressId')
        Col.cellRendererFramework = params => {
            return (
                <Popover overlayClassName="seed-img-popover" mouseEnterDelay={0.3} placement="right" content={<img width="240" height="240" src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3261990965,2215517573&fm=85&s=99C5874A68A077240B0E466C0300E07C" />}>
                    <img width="32" height="32" src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3261990965,2215517573&fm=85&s=99C5874A68A077240B0E466C0300E07C" style={{ cursor: 'pointer' }} />
                </Popover>
            )
        }
        return minColumns
    }
    componentDidMount() {
        // this.props.queryHomeGrid({ pageNo: 1, pageSize: 50 })
        axios.get('http://127.0.0.1:9090/tc/delivery/delivery_wave/data/list', {
            pageNo: 1,
            lastName: 50,
            headers: { 
                Cookie: '_ati=2589300460228; ERPLanguage=zh; JSESSIONID=2376B922B3A11CD447E2EE8E09D900A8-n2'}
        }).then(res => {
            this.setState({ homeGridData: res.data })
        })

        // setTimeout(() => {
        //     this.setState({
        //         homeGridData: 
        //     })
        // }, 10);
    }

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
            return;
          };
    }
    render() {
        const { homeGridData } = this.state
        console.log('homeGridData', homeGridData)
        return (
            <div className="seed-ag-grid-wrap">
                <AgGrid
                    rowData={homeGridData ? homeGridData.rows : []}
                    columnDefs={this.getColumn()}
                    pagination={{pageSize:10, page:1, total: 10}}
                />
            </div>
        )
    }
}

export default SeedGrid