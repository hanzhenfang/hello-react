
import Myajax from "./ajax";


// CURD:create,update,read,delete
// 这个文件封装了关于增删改查的一些Ajax请求的，API方法


const Base = 'http://localhost:5500';
const PROXY_BASE = 'http://localhost:3000'
// http://localhost:3000/subCategory

// 品类管理下，<Cascader/>获取一级分类列表的方法（获取...服装/电脑/玩具等最开始的数据)
export const reqCategoryList = () => Myajax(Base + "/catagoryList")

//品类管理下<Cascader/>获取二级分类列表的方法
export const reqSubCategoryList = (parentID) => Myajax(PROXY_BASE + "/subCategoryaaa", { number: parentID }, "POST")


//首先实现自动去数据库查找然后渲染到页面上的效果
export const reqCategorys = (parentID) => Myajax(Base + '/category', { parentID });

//实现向数据库增加内容
export const reqAddCategorys = ({ categoryName, parentID }) => Myajax('', { categoryName, parentID }, "POST");

// const reqSubCategory = (parentID) => {
//   return (axios.post("http://localhost:3000/subcategory", { parentID }))

// }

//获取<---商品管理--->内容的请求请求
export const reqProducts = (data) => Myajax(PROXY_BASE + '/product/list', data, "POST")

//商品管理下面的搜索按钮功能的实现

export const reqSearchProduct = (searchType, keyWord) => Myajax(PROXY_BASE + '/product/search', { "searchType": searchType, "keyWord": keyWord }, "POST")

// 实现发送请求更新产品当前状态的功能
export const reqUpdateStatus = (productID, productStatus) => Myajax(PROXY_BASE + '/product/updatestatus', { productID, productStatus }, "POST")