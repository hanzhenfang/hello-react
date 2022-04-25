import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Table } from 'antd';
import LinkButton from '../../Components/linkButton';
// 商品分类页面

export default function Category() {
    const [categorys, setCategorys] = useState([])    //设置初始数据为空数组
    const [isLoding, setIsLoding] = useState(false)   //设置列表loding状态
    const columns = [
        {
            title: '种类名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            width: '30%',
            render: () => (
                <span>
                    <LinkButton> 查看分类 </LinkButton>
                    <LinkButton> 修改分类 </LinkButton>
                </span>
            )
        }
    ];

    useEffect(() => { // 数据返回
        setIsLoding(true);
        axios.get('http://localhost:5500/catagoryList').then((res) => {
            setCategorys(res.data);
            setIsLoding(false);
            console.log(res.data);
        })
    }, [])

    const title = "分类名称"
    const extra = (
        <Button
            type="primary">
            <span>添加</span>
        </Button>
    )

    return (
        <>
            {console.log(BB)}
            <Card
                title={title}
                extra={extra}
                style={{
                    width: "100%",
                    height: "100%"
                }}>
                <Table
                    dataSource={categorys}
                    columns={columns}
                    rowKey="_id"
                    bordered
                    pagination={{ defaultPageSize: 5, showQuickJumper: true }}
                    loading={isLoding}
                />
            </Card>
        </>
    );
}



const aa = [{
    "_id": {
        "$oid": "62651f035b1c5db987aa3ded"
    },
    "parentID": "626421de5b1c5db987aa3dd0",
    "name": [
        "耐克",
        "特步",
        "阿迪达斯"
    ]
}, {
    "_id": {
        "$oid": "62651f035b1c5db987aa3dee"
    },
    "parentID": "626422b45b1c5db987aa3dd6",
    "name": [
        "联想",
        "外星人",
        "MacBookPro"
    ]
}, {
    "_id": {
        "$oid": "62651f035b1c5db987aa3def"
    },
    "parentID": "626422c95b1c5db987aa3dd7",
    "name": [
        "泰罗奥特曼",
        "怪兽",
        "小小怪"
    ]
}, {
    "_id": {
        "$oid": "62651f035b1c5db987aa3df0"
    },
    "parentID": "626422d95b1c5db987aa3dd8",
    "name": [
        "冰箱",
        "电视",
        "饮水机"
    ]
}]

const AA = aa.map((items) => {
    return items.name
})

const BB = AA[0].map((items) => {
    return ({ name: items })
})
