import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Table, Modal, Input } from 'antd';
import LinkButton from '../../Components/linkButton';

import AddForm from './add-form'
// 商品分类页面
export default function Category() {
	const [categorys, setCategorys] = useState([])    //设置一级分类列表
	const [subCategory, setSubCategory] = useState([])//设置二级分类列表
	const [parentID, setParentId] = useState("0")    //用来切换展示一级列表还是二级列表
	const [parentName, setParentName] = useState("") //用来展示标题名称动态显示
	const [isLoding, setIsLoding] = useState(false)   //设置列表loding状态
	const [showModal, setShowModal] = useState(0)    //设置弹出框的显示还是隐藏
	const [categoryName, setCategoryName] = useState("")
	const [updateCategoryName, setUpdateCategoryName] = useState("")

	const [form, setForm] = useState({}) //得到子组件表单对象
	const columns = [
		{
			title: '种类名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '操作',
			width: '30%',
			render: (category) => (
				<span>
					{parentID === "0" ?
						<LinkButton onClick={() => showSubCategory(category)} >
							查看分类
						</LinkButton> : null}
					<LinkButton onClick={() => updateCategory(category)}>
						更新分类
					</LinkButton>
				</span>
			)
		}
	];

	useEffect(() => { // 数据返回
		setIsLoding(true);
		console.log("effect请求次数")
		axios.get('http://localhost:5500/catagoryList').then((res) => {
			setCategorys(res.data);
			setIsLoding(false);
		})
	}, [])

	//点击查看二级分类，向后台发送请求获取数据。
	const showSubCategory = async (category) => {
		try {
			const response = await axios.get("http://localhost:3000/subCategory");
			const data = response.data
			console.log(data)
			const sub = data.find((items) => {
				return items.parentID === category._id
			});
			console.log(sub)
			const showSub = sub.name.map((items) => {
				return ({ name: items, parentID: category._id })
			});
			setParentId(category._id);
			setSubCategory(showSub);
			setParentName(category.name);
		} catch (err) {
			alert(err)
		}
		// setCategorys([]);

	}

	const addCategory = () => {
		const newCategoryName = form.getFieldValue('newCategoryName')//1.得到用户输入
		console.log(newCategoryName)
		// 2.发送请求前先判断当前是一级分类还是二级分类，判断是否有重复值
		if (parentID === "0") {
			const isHade = categorys.find((items) => {
				return items.name === newCategoryName
			})
			if (isHade || newCategoryName === "" || newCategoryName === undefined) {
				alert("请勿输入重复值或者空值")
				form.resetFields()
			}
			else {
				axios.post("http://localhost:3000/addcategory", { newCategoryName: newCategoryName }).then((data) => {
					console.log(data)
				});
				form.resetFields()
			}
		}
		else {
			const isHade = subCategory.find((items) => {
				return items.name === newCategoryName
			})
			if (isHade || newCategoryName === "" || newCategoryName === undefined) {
				alert("请勿输入重复值或者空值")
				form.resetFields()
			}
			else {
				axios.post("http://localhost:3000/addsubcategory", { newCategoryName: newCategoryName });
				console.log("发送二级请求了")
				form.resetFields()
			}
		}

	}

	const updateCategory = (category) => {
		setShowModal(2)  //1.点击修改分类的时候，弹出第二个对话框，也就是修改分类的对话框
		console.log(category)
		setCategoryName(category.name) //2.将当前点击项的名字储存在状态中,直接设置为打开input框时的默认值defaultValue={categoryName}
		// 3.判断当前输入是否和之前的值一样或者等于控制，是的话返回null，不是的话进入下一步请求判断
		if (updateCategoryName === "" || updateCategoryName === categoryName) {
			return null;
		}
		else {
			// 4.发送请求，请求后端更改列表的某一项,发送请求的时候需要告知后端当前项目的ID和name
			if (parentID === "0") {

			}
		}
		// 4.重新显示新的列表

	}
	const title = "一级分类名称"
	const extra = (
		<Button
			onClick={() => setShowModal(1)}
			type="primary">
			<span>添加</span>
		</Button>
	)

	return (
		<>
			<Card
				title={parentID === "0" ? title : <LinkButton onClick={() => setParentId("0")}><h1>{parentName}</h1>
				</LinkButton>}
				extra={extra}
				style={{
					width: "100%",
					height: "100%"
				}}>
				<Table
					dataSource={parentID === "0" ? categorys : subCategory}
					columns={columns}
					rowKey="name"
					bordered
					pagination={{ defaultPageSize: 5, showQuickJumper: true }}
					loading={isLoding}
				/>

				{/* 添加分类对话框 */}
				<Modal
					title="添加"
					okText="确定"
					cancelText="取消"
					destroyOnClose={true}  //点击关闭的时候，清除框内的信息，从头开始。
					visible={showModal === 1 ? true : false}
					onOk={addCategory}
					onCancel={() => setShowModal(0)}>
					<AddForm categorys={categorys}
						parentName={parentName}
						getChildrenForm={setForm}
					/>

				</Modal>
				{/* 更新分类对话框 */}
				<Modal
					title="更新分类"
					okText="确定"
					cancelText="取消"
					destroyOnClose={true} //点击关闭的时候，清除框内的信息，从头开始。
					visible={showModal === 2 ? true : false}
					onOk={updateCategory}
					onCancel={() => setShowModal(0)}>
					<Input
						ref={(input) => {
							if (input !== null) {
								setUpdateCategoryName(input.input.value)
							}
						}}
						name="newCategoryName"
						defaultValue={categoryName}
					/>
				</Modal>
			</Card>
		</>
	);
}




