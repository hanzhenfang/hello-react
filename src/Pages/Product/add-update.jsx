import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Card,
  Form,
  Input,
  Button,
  Cascader,
} from 'antd';

import { reqCategoryList, reqSubCategoryList } from '../../Api/curd'
import LinkButton from '../../Components/linkButton';
import PictureWall from '../../Components/antd/pictureWall'

const { TextArea } = Input;
const { Item } = Form;

export default function ProductAddUpate() {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const product = useLocation().state;
  const pictureWallList = useRef();

  const optionFactory = (categoryLists) => {
    return categoryLists.map((items) => {
      return (
        {
          value: items._id,
          label: items.name,
          isLeaf: false
        }
      )
    })
  }

  useEffect(() => {
    reqCategoryList().then((req) => {
      const initOptions = optionFactory(req.data)
      setOptions(initOptions)
    }
    );
  }, [])

  const onFinish = (value) => {
    console.log(value)
  }

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    //发送请求，获取当前项的子项
    reqSubCategoryList(targetOption.value).then((res) => {
      console.log(res)
      const childrenList = res.data.name.map(items => {
        return ({
          name: items,
          value: res.data._id,
        })
      })
      console.log(childrenList)
      const childrenOptionList = childrenList.map((item) => {
        return (
          {
            label: item.name,
            value: item.value,
          }
        )
      })
      targetOption.loading = true;
      // load options lazily
      targetOption.children = childrenOptionList
      // setOptions([...options]);
      targetOption.loading = false;
    }).catch((err) => {
      console.log(err);
    })

  };
  const title = (<LinkButton onClick={() => navigate(-1)} >
    {"<" + "----返回"}
  </LinkButton>)

  return (
    <>
      {console.log(product)}
      <Card
        style={{ height: "100%" }}
        title={title}>
        <Form
          wrapperCol={{ span: 8, offset: 0 }}
          onFinish={onFinish}
          initialValues={{
            name: product ? product.name : "",
            desc: product ? product.desc : "",
            price: product ? product.price : "",
            categoryIDs: product ? product.pCategoryId : ""
          }}
        >
          <Item
            label="商品名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入正确的名称',
              }
            ]}
          >
            <Input placeholder="请输入添加的商品名称" />
          </Item>

          <Item
            label="商品描述"
            name="desc"
            rules={[
              {
                required: true,
                message: '请输入正确的商品描述',
              }
            ]}
          >
            <TextArea
              autoSize={{ minRows: 3, maxRows: 3 }}
              placeholder="请输入商品描述"
            />
          </Item>

          <Item
            label="商品价格"
            name="price"
            rules={[
              {
                required: true,
                message: '请输入正确的价格',
              }
            ]}
          >
            <Input placeholder="请输入商品价格" addonAfter="元" />
          </Item>


          <Item
            rules={[
              {
                required: true,
                message: '请输入正确的分类',
              }
            ]}
            label="商品分类"
            name="categoryIDs">
            <Cascader
              options={options}
              loadData={loadData}
            />
          </Item>


          <Item
            rules={[
              {
                required: true,
                message: '请上传正确的图片',
              }
            ]}
            label="商品图片"
          >
            <PictureWall ref={pictureWallList} />
          </Item>

          <Item

            label="商品详情"
            name="productPrice">
            <div>商品详情</div>
          </Item>

          <Item
            wrapperCol={{
              offset: 4,
              span: 8,
            }}
          >
            <Button
              type="primary"
              htmlType="submit">
              提交
            </Button>
          </Item>
        </Form>
      </Card>
    </>
  )
}
