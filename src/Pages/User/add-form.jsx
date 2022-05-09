import React, { useEffect } from 'react'
import { Form, Select, Input, } from 'antd'

const Item = Form.Item
const Option = Select.Option

export default function AddForm(props) {
  const [form] = Form.useForm();

  useEffect(() => {
    props.getChildrenForm(form)
  }, [])

  return (
    <>
      <Form
        name="addNewRoles"
        form={form}
        preserve={false}
      >
        <Item
          style={{ display: "block" }}
          label="新用户"
          name="newRoleName"
          rules={[
            {
              required: true,
              message: "请输入正确的权限"
            }
          ]}

        >
          <Input

            placeholder='请输入正确的权限'
          />
        </Item>
      </Form>
    </>
  )
}
