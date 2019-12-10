import React, { PureComponent } from 'react'
import { Popover, Badge } from 'antd'
import classNames from 'classnames'
import styles from './index.less'

function Content () {
    return (
        <div className={styles["seed-popover-wrap"]}>
            <div className={styles["item"]}>
                <div className={styles["left"]}><Badge status="default" text="发货单号" />：</div>
                <div className={styles["right"]}>123</div>
            </div>
            <div className={styles["item"]}>
                <div className={styles["left"], styles["justify"]}><Badge status="default" text="异常" />：</div>
                <div className={styles["right"], styles["abnormal"]}>已退款</div>
            </div>
            <div className={styles["item"]}>
                <div className={styles["left"]}><Badge status="default" text="播种详情" />：</div>
                <div className={styles["right"]}>
                    <span className={styles["text-bold"]}>4&nbsp;</span>
                    <span className={styles["text-light"]}>/16</span>
                </div>
            </div>
            <div className={styles["item"], styles["item-last"]}>
                <Badge status="default" text="发货单商品明细" />：
                <div className={styles["right"], styles["detail-product"]}>
                    百香果：<span className={styles["text-bold"]}>12&nbsp;</span><span className={styles["text-light"]}>/20</span>
                </div>
            </div>  
        </div>
    )
}

class SeedWall extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            line: props.line,
            column: props.column,
            number: 10
        }
    }
    static getDerivedStateFromProps(props) {
        return {
            line: props.line,
            column: props.column,
            number: 10
        }
    }
    renderCol = (curLine) => {
        const { line, column, number } = this.state
        let _col = []
        for (let i = 0; i < column; i++) {
            const gridNumber = i + 1 + curLine * column
            const gridCls = classNames(styles['grid'], {
                [styles.active]: gridNumber === number,
                [styles.default]: gridNumber !== number,
            })
            _col.push(
                <Popover key={i} content={<Content />} trigger="click">
                    <div className={gridCls} style={{ width: `${100 / (parseInt(column) + 2)}%`, height: '100%', fontSize: `${10 / line}em`, userSelect: "none"}}>
                        {gridNumber}
                    </div>
                </Popover>
            )
        }
        return _col
    }
    renderRow = () => {
        const { line } = this.state
        let _row = []
        for (let i = 0; i < line; i++) {
            _row.push(
                <div className={styles["row"]} key={i} style={{ height:  `${100 / (parseInt(line) + 2)}%` }}>
                    {this.renderCol(i)}
                </div>
            )
        }
        return _row
    }
    render() {
        return (
            <div className={styles["seed-wall-wrap"]}>
                {this.renderRow()}
            </div>
        )
    }
}

export default SeedWall