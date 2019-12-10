import React from 'react'
import { Icon } from 'antd'

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

export default minColumns