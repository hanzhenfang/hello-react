import axios from "axios";
import Myajax from "./ajax";

{/* 
CURD:create,update,read,delete
这个文件封装了关于增删改查的一些Ajax请求的，API方法
*/}

const Base = 'http://localhost:5500';

//首先实现自动去数据库查找然后渲染到页面上的效果
export const reqCategorys = (parentID) => Myajax(Base + '/category', { parentID });

//实现向数据库增加内容
export const reqAddCategorys = ({ categoryName, parentID }) => Myajax('', { categoryName, parentID }, "POST");

const reqSubCategory = (parentID) => {
  return (axios.post("http://localhost:3000/subcategory", { parentID }))

}
