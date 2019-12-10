import React from 'react'
import { Icon } from 'antd'

// 索引列和 select 选择列
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

export default minColumns