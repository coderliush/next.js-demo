import React, { Component } from 'react'
import Link from 'next/link'
import { Table } from 'antd'
import axios from 'axios'

const columns = [
  {
    title: 'Id',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'ExpressName',
    dataIndex: 'expressName',
    key: 'expressName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'SkuCount',
    dataIndex: 'skuCount',
    key: 'skuCount',
  },
  {
    title: 'TtenantId',
    dataIndex: 'tenantId',
    key: 'tenantId',
  },
  {
    title: 'OrderCount',
    key: 'orderCount',
    dataIndex: 'orderCount',
  },
]

export default class home extends Component {
  static async getInitialProps() {
    let list = await axios.post('http://127.0.0.1:9090/tc/delivery/delivery_wave/data/list', {
      pageNo: 1,
      lastName: 50,
      headers: { Cookie: 'gr_user_id=3b39558e-36ca-4c6f-adf0-bddb4504af7a; ERPLanguage=zh; _ati=5076230749950; userId=2530158115; pin=7d5bc86a7e22b80e71be1dcd649b8e0d; gyTenant=2530157349; route=cf89a55b221865ef17f55dcf4b05ca13; JSESSIONID=96A3616DD19D0F962D48CB3787443ADE-n2' }
    })
      .then(function (res) {
        res.data.rows.forEach(item => {
          item.key = item.id
        })
        return res.data
      })
      .catch(function (error) {
        console.log('error', error);
      })
    return { list }
  }
  render() {
    console.log('props', this.props.list)

    return (
      <>
      <Link href="/detail"> 
        <a style={{marginRight: '40px'}}>详情页面</a>
      </Link>
      <Link href="/about">
        <a>关于页面</a>
      </Link>
      <div>
        <Table dataSource={this.props.list.rows} columns={columns} pagination={false} />
      </div>
      </>
    )
  }
}
