import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Card,
  List,
} from 'antd';
import LinkButton from '../../Components/linkButton';


const { Item } = List

export default function ProductDetial() {
  const navigate = useNavigate();
  const location = useLocation()
  const product = location.state

  const title = (
    <LinkButton onClick={() => navigate(-1)} >商品详情</LinkButton>
  )

  return (
    <>
      {console.log(product)}
      <Card
        className='product-detial'
        title={title}>
        <List>
          <Item
            style={{ display: "block" }}
            className='left'>
            <span>商品名称:</span>
            <span>{product.name}</span>
          </Item>

          <Item
            style={{ display: "block" }}
            className='left'>
            <span>产品描述:</span>
            <span>{product.desc}</span>
          </Item>

          <Item
            style={{ display: "block" }}
            className='left'>
            <span>商品价格:</span>
            <span>{product.price}</span>
          </Item>

          <Item
            style={{ display: "block" }}
            className='left'>
            <span>所属分类:</span>
            <span>XXXX</span>
          </Item>

          <Item
            style={{ display: "block" }}
            className='left product-image'>
            <span>商品图片:</span>
            <span>XXXX</span>
          </Item>

          <Item
            style={{ display: "block" }}
            className='left'>
            <span>商品详情:</span>
            <span dangerouslySetInnerHTML={{ __html: product.detail }}></span>
          </Item>
        </List>
      </Card>
    </>
  )
}

