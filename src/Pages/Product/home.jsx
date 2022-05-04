import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Select,
  Input,
  Button,
  Table
} from 'antd';

import LinkButton from '../../Components/linkButton';
import { reqProducts, reqSearchProduct, reqUpdateStatus } from '../../Api/curd';

const Option = Select.Option

export default function ProductHome() {
  const [products, setProducts] = useState([]);
  const [loding, setLoding] = useState(false);//Table的loding属性
  const [searchType, setSearchType] = useState("name");//搜索框的搜索类型
  const [keyWord, setKeyWord] = useState("");//用户在搜索框输入的数据
  const [nowStatus, setNowStatus] = useState("")
  const navigate = useNavigate();

  //向后端发请求获取商品管理页面的数据
  useEffect(() => {
    async function fetchData() {
      setLoding(true); //获取商品列表
      try {
        const result = await reqProducts({});
        console.log(result)
        const data = result.data
        setProducts(data)
        setLoding(false)
        setNowStatus("")
      } catch {
        console.log("接受错误")
      }
    };
    fetchData()
  }, [nowStatus])

  // 向后端发请求查询关键字来获取列表
  const searchList = async () => {
    if (keyWord === "") {
      return null;
    }
    else {
      setLoding(true)
      try {
        const result = await reqSearchProduct(searchType, keyWord);
        setProducts(result.data)
        setLoding(false)
      } catch (err) {
        console.log(err)
      }
    }

  }

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
      key: 'status',
      render: (product) => {
        return (
          <span>
            <Button
              onClick={async () => {
                console.log("发送了")
                const data = await reqUpdateStatus(product._id, product.status)
                setNowStatus(data.data.status)
              }}
            >{product.status === 1 ? "售卖" : "下架"}</Button>
            <span>{product.status === 1 ? "下架" : "售卖"}</span>
          </span>
        )
      }

    },
    {
      width: "10%",
      title: '操作',
      key: 'caozuo',
      render: (product) => {
        return (
          <span>
            <LinkButton onClick={() => navigate('/dashboard/product/addupdate', { state: product })}>修改</LinkButton>
            <LinkButton
              onClick={() =>
                navigate('/dashboard/product/detial', {
                  state: product
                })}>
              详情</LinkButton>
          </span>
        )
      }
    },
  ];

  const title = (
    <span>
      <Select
        onChange={(value) => setSearchType(value)} //选中的值会通过这个回调的第一个参数传过来
        defaultValue="name"
        style={{ width: "150px" }
        }>
        <Option value="name">按名称搜索</Option>
        <Option value="desc">按描述搜索</Option>
      </Select>
      <Input
        placeholder="输入关键字"
        style={{ width: "150px", margin: "0 1em" }}
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <Button
        type="primary"
        onClick={searchList}
      >
        搜索
      </Button>
    </span>
  )

  const extra = (
    <Button type="primary" onClick={() => navigate('/dashboard/product/addupdate')}>添加</Button>
  )

  return (
    <>
      <Card
        style={{ height: "100%" }}
        title={title}
        extra={extra}>
        <Table
          bordered
          loading={loding}
          style={{ height: "100%" }}
          rowKey="_id"
          dataSource={products}
          columns={columns}
          pagination={{ defaultPageSize: 3, showQuickJumper: true }}
        />
      </Card>
    </>
  )
}


