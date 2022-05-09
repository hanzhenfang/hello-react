import React, { useState } from 'react';

import {
  Card,
  Button,
  Table,
  Modal,
  Input

} from 'antd';
import AddForm from './add-form';

// 用户管理

export default function User() {
  const [rolesList, setRolesList] = useState([{
    _id: "5e175a134bce5e36d48fb4db",
    menus: [
      "all",
      "/home",
      "/products",
      "/category",
      "/product",
      "/user",
      "/role",
      "/charts",
      "/charts/bar",
      "/charts/line",
      "/charts/pie"
    ],
    name: "管理员",
    "create_time": "1578588691768",
    "auth_name": "admin",
    "auth_time": "1578588698490"
  },
  {
    _id: "5e175a134bce5e36d48fa4db",
    menus: [
      "all",
      "/home",
      "/products",
      "/category",
      "/product",
      "/user",
      "/role",
      "/charts",
      "/charts/bar",
      "/charts/line",
      "/charts/pie"
    ],
    name: "管理员",
    "create_time": "1578588691768",
    "auth_name": "admin",
    "auth_time": "1578588698490"
  }
  ]);
  const [checkedRole, setCheckedRole] = useState({})
  const [showModal, setShowModal] = useState(0)
  const [newRole, setNewRole] = useState("")
  const [form, setForm] = useState({})

  const addNewRole = () => {

  }

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
    },
    {
      title: '授权人',
      dataIndex: 'auth_name',
    },
    {
      title: '授权时间',
      dataIndex: 'auth_time',
    },

  ];

  const title = (
    <span>
      <Button type='primary' onClick={() => setShowModal(1)} >创建角色</Button>
      <Button type='primary' onClick={() => setShowModal(2)} disabled={!checkedRole._id}>设置权限</Button>
    </span>
  )
  return (
    <>
      <Card
        style={{ height: "100%" }}
        title={title}
      >
        <Table
          onRow={role => {
            return (
              {
                onClick: () => setCheckedRole(role)
              }
            )
          }}
          dataSource={rolesList}
          columns={columns}
          rowKey="_id"
          bordered
          rowSelection={{ type: "radio", selectedRowKeys: [checkedRole._id] }}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />

        <Modal
          title="添加新用户"
          okText="确定"
          cancelText="取消"
          destroyOnClose={true} //点击关闭的时候，清除框内的信息，从头开始。
          visible={showModal === 1 ? true : false}
          onOk={addNewRole}
          onCancel={() => setShowModal(0)}>
          <label for="newRole">新用户:</label>
          <Input
            style={{ display: "block" }}
            ref={(input) => {
              if (input !== null) {
                setNewRole(input.input.value)
              }
            }}
            name="newRole"
            placeholder='请输入新用户名'
          />
        </Modal>

        <Modal
          title="设置权限"
          okText="确定"
          cancelText="取消"
          destroyOnClose={true}  //点击关闭的时候，清除框内的信息，从头开始。
          visible={showModal === 2 ? true : false}
          onOk={() => console.log("哈哈")}
          onCancel={() => setShowModal(0)}>
          <AddForm
            getChildrenForm={setForm}
          />
        </Modal>
      </Card>
    </>
  )
}
