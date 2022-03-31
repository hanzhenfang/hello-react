import React from 'react';
import './App.css';
import TodoList from './pages/todoList/todolist'

function App() {

  const fnOnClick = () => console.log("幻影剑舞已经开启!!") //这就是你按钮提交的onclick事件

  function cdTime(fn, delay) {
    let CD = false;       //首先你的技能刚开始是没有冷却时间的
    return function () {
      if (CD) {       //ok,当你想放技能的时候，你需要判断是否在冷却时间内，如果在，对不起不能放!
        console.log("不行,cd中")
        return false; //这里写你null， 空值都可以
      }
      CD = true; //这一步我的技能还没放，即将要释放。进行到这一步的时候，其实setTimout里的回调函数已经开始执行了，所以我们要修改为true，来约束用户频繁点击。因为setTimout是异步执行，所以cd在两秒以后才会被修改,这一步是限制用户频繁点击技能键时，让函数返回一个空值。
      setTimeout(() => {   //现在没有进入cd，当你放技能的时候然后开始启用。别迷。这里只是单纯的调用了一个函数 带花阔号却没有return就是个普通的函数，回调函数是放在参数里的！别迷.
        console.log("冲啊!");
        CD = false; //ok,现在我技能释放完毕，把cd的属性清空，让用户可以重新释放。
        fn();
      }, delay);
    }
  }


  let p = new Promise((resolve, reject) => {
    resolve("hh");
  })
  p.then((value) => {
    console.log(value)
  }).then((value) => {
    console.log(p)
  })

  return (
    <>
      <h1>冷却时间是2秒</h1>
      <button>点我发送请求</button>
      <button onClick={cdTime(fnOnClick, 2000)}>幻影剑舞</button>
      <TodoList />
    </>
  );
}

export default App;
