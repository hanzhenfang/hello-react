const siderBarList = [
    {
        title: "首页",  //菜单名称
        key: "home",  //菜单的key和路由
        icon: "DesktopOutlined"  //图标的样式
    },
    {
        //注意这里，商品有二级路由，需要给children属性
        title: "商品",
        key: "products",
        icon: "DesktopOutlined",
        children: [
            {
                title: "品类管理",
                key: "category",
                icon: "HeartOutlined",
            },
            {
                title: "商品管理",
                key: "product",
                icon: "HeartOutlined",
            }
        ]
    },
    {
        title: "用户管理",
        key: "user",
        icon: "UserOutlined"
    },
    {
        title: "角色管理",
        key: "role",
        icon: "NotificationOutlined"
    },

]

export default siderBarList