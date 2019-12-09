import React, { Component } from 'react'
import Link from 'next/link'

export default class about extends Component {
    render() {
        return (
            <div>
                关于页面的内容
                <br />
                <Link><a href="/">返回</a></Link>
            </div>
        )
    }
}
