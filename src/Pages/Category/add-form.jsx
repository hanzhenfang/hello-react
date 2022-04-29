import React, { useEffect } from 'react'
import { Form, Select, Input, } from 'antd'

const Item = Form.Item
const Option = Select.Option

export default function AddForm(props) {
  const [form] = Form.useForm();

  useEffect(() => {
    props.getChildrenForm(form)
  }, [])

  const { categorys, parentName } = props //接受来自父组件的 一级分类列表
  return (
    <>
      {console.log(categorys, parentName)}
      <Form
        name="addNewCategory"
        form={form}
        preserve={false}
        initialValues={{ parentName: parentName === "" ? "0" : parentName }}
      >
        <Item
          name="parentName"
          rules={[
            {
              required: true,
              message: "你需要到哪个一级分类?",
            },
          ]}
          hasFeedback
        >
          <Select>
            <Option key="0">一级分类</Option>
            {categorys.map(items => {
              return (
                <Option key={items._id} value={items._id}>{items.name}</Option>
              )
            })}
          </Select>
        </Item>

        <Item
          name="newCategoryName"
          rules={[
            {
              required: true,
              message: "请输入正确的名称"
            }
          ]}

        >
          <Input
            placeholder='请输入要添加分类的具体名称'
          />
        </Item>
      </Form>
    </>
  )
}
