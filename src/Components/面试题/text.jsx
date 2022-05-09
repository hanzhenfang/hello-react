import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DisplayDate() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function asyncRequset() {
      try {
        const result = await axios.get("http://br-main.bluersrc.com:10002/user/list"); //在这里我采用了 Chrome 浏览器插件 Modheader来解决跨域问题
        setDataList(result.data.data);
        console.log(dataList)
      }
      catch (err) {
        console.log("请求错误信息是", err)
      }
    }
    asyncRequset();
  }, [])
  return (
    <>
      {console.log(dataList)}
      <ul>
        {dataList.map((items) => {
          return (
            <li key={items.id}>{items.id},{items.name}</li>)
        })}
        <li></li>
      </ul>
    </>
  )
}

const preList = [
  { id: 1, pid: 0, name: "a" },
  { id: 2, pid: 1, name: "b" },
  { id: 3, pid: 1, name: "c" },
  { id: 4, pid: 2, name: "d" },
  { id: 5, pid: 3, name: "e" },
];

//实现思路：在实际开发过程中我们需要的数据并不一定是pid从0开始的。
//因为这道题目是0开始，那么我们首先给予这个函数两个参数，第一个参数为我们将要传传入的数据，
//第二个参数为具体从哪一个pid开始获取，这里给第二个参数一个默认值0，如果后期有值直接覆盖即可

const arrayToTree = (data, pid = 0) => {
  return data.reduce((prev, cur) => {
    if (cur.pid === pid) {
      const children = arrayToTree(data, cur.id);  //这里的原理是当前值的id恰好是下一级的pid
      if (children) {                     //如果当前children有返回值，说明当前数据应有children属性
        cur.children = children;          //把当前的arratToTree的返回值作为cur的children属性保存
      }
      prev.push(cur);                   //收集所需数据
    }
    return prev;                       //将每次执行的回调函数的返回值作为新的prev值
  }, [])                               //设计空数组作为reduce的起始参数
}

const result = arrayToTree(preList);
console.log(result);                   //执行下列代码即可