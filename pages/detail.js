import React, { Component } from 'react'
import Link from 'next/link'

export default class detail extends Component {
    render() {
        return (
            <div>
                详情页面的内容
                <br />
                <Link><a href="/">返回</a></Link>
            </div>
        )
    }
}
