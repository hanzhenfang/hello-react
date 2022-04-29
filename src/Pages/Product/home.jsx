import React, { useState } from 'react';
import {
  Card,
  Select,
  Input,
  Button,
  Table
} from 'antd';

import LinkButton from '../../Components/linkButton';

const Option = Select.Option

export default function ProductHome() {
  const [products, setProducts] = useState([])

  const dataSource = [{
    "_id": {
      "$oid": "5e12b97de31bb727e4b0e349"
    },
    "status": 2,
    "imgs": [
      "1578588737108-index.jpg"
    ],
    "name": "联想ThinkPad 翼4809",
    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
    "price": 6300,
    "pCategoryId": "5e12b8bce31bb727e4b0e348",
    "categoryId": "5fc74b650dd9b10798413162",
    "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\"></span></p>\n",
    "__v": 0
  }, {
    "_id": {
      "$oid": "5e12b9d1e31bb727e4b0e34a"
    },
    "status": 1,
    "imgs": [
      "image-1559402448049.jpg",
      "image-1559402450480.jpg"
    ],
    "name": "华硕(ASUS) 飞行堡垒",
    "desc": "15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)",
    "price": 6799,
    "pCategoryId": "5e12b8bce31bb727e4b0e348",
    "categoryId": "5fc74b650dd9b10798413162",
    "detail": "<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">华硕(ASUS) 飞行堡垒6 15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)火陨红黑</span> </p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">【4.6-4.7号华硕集体放价，大牌够品质！】1T+256G高速存储组合！超窄边框视野无阻，强劲散热一键启动！</span> </p>\n",
    "__v": 0
  }, {
    "_id": {
      "$oid": "5e145c55d9ba8f39dc5f879f"
    },
    "status": 2,
    "imgs": [
      "image-1559402396338.jpg"
    ],
    "name": "联想ThinkPad 翼4809",
    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
    "price": 65999,
    "pCategoryId": "5e12b8bce31bb727e4b0e348",
    "categoryId": "5fc74b650dd9b10798413162",
    "__v": 0
  }, {
    "_id": {
      "$oid": "5e145c5ed9ba8f39dc5f87a1"
    },
    "status": 1,
    "imgs": [
      "image-1559402396338.jpg"
    ],
    "name": "联想ThinkPad 翼4809",
    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
    "price": 65999,
    "pCategoryId": "5e12b8bce31bb727e4b0e348",
    "categoryId": "5fc74b650dd9b10798413162",
    "__v": "0"
  }, {
    "_id": {
      "$oid": "5e146b3cd9ba8f39dc5f87a2"
    },
    "status": 1,
    "imgs": [
      "image-1559402396338.jpg"
    ],
    "name": "联想ThinkPad 翼4809",
    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
    "price": 65999,
    "pCategoryId": "5e12b8bce31bb727e4b0e348",
    "categoryId": "5fc74b650dd9b10798413162",
    "detail": "",
    "__v": "0"
  }];

  const columns = [
    {
      width: "20%",
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      width: "60%",
      title: '商品描述',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price) => '¥' + price
    },
    {
      width: "10%",
      title: '状态',
      dataIndex: 'status',
      key: 'price',
      render: (status) => <Button>在售</Button>
    },
    {
      width: "10%",
      title: '操作',
      dataIndex: 'desc',
      key: 'desc',
      render: (product) => {
        return (
          <span>
            <LinkButton>修改</LinkButton>
            <LinkButton>详情</LinkButton>
          </span>
        )
      }
    },
  ];

  return (
    <>
      <Card
        style={{ height: "100%" }}
        title={title}
        extra={extra}>
        <Table
          style={{ height: "100%" }}
          rowKey="_id"
          dataSource={dataSource}
          columns={columns}
        />
      </Card>
    </>
  )
}

//卡片左上角搜索框的内容
const title = (
  <span>
    <Select defaultValue="1" style={{ width: "150px" }}>
      <Option value="1">按名称搜索</Option>
      <Option value="2">按描述搜索</Option>
    </Select>
    <Input placeholder="输入关键字" style={{ width: "150px", margin: "0 1em" }} />
    <Button type="primary">搜索</Button>
  </span>
)

//卡片右上角搜索框的内容
const extra = (
  <Button type="primary">添加</Button>
)

