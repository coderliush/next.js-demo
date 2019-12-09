import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popover } from 'antd'
import AgGrid from '../../../../components/ag-grid'
import minColumns from './config'
import './index.less'

@connect(
    (seed) => (seed),
    dispatch => ({
        queryHomeGrid: payload => dispatch({ type: 'seed/queryHomeGrid', payload }),
    })
)
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
        let that = this
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
        this.props.queryHomeGrid({ pageNo: 1, pageSize: 50 })
    }
    render() {
        const { homeGridData } = this.state.seed
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