import React from 'react';
import { Link, useLocation, } from 'react-router-dom'
import { Menu } from 'antd';
import siderBarList from '../../../Config/siderBarList';
import customIcon from '../../../Components/antd/icon';

const { SubMenu } = Menu;

export default function MainListItems() {
  const location = useLocation();
  const path = location.pathname.replace("/dashboard/", "")


  return (
    <>
      <Menu
        mode="inline"
        selectedKeys={path}
        style={{ height: '100%', borderRight: 0 }}
      >
        {getSiderBarList(siderBarList)}
      </Menu>
    </>
  );
}

//下面的函数是动态打印左边菜单栏

const getSiderBarList = (siderBarList) => {
  return (
    siderBarList.map((item) => {
      if (!item.children) { //先判断是否有二级路由，如果没有就普通渲染
        return (
          <Menu.Item
            key={item.key} >
            <Link to={item.key}>
              {/* antd.v4以上版本图标需要特殊方法引入，不过多赘述 */}
              {customIcon(item.icon)}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                {customIcon(item.icon)}
                <span>{item.title}</span>
              </span>
            }
          >
            {
              getSiderBarList(item.children)//递归调用自身，重复最开始的操作
            }
          </SubMenu>
        )
      }
    })
  )
}
