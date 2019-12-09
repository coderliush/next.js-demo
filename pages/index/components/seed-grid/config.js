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

export default minColumns