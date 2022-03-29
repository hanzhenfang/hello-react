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
        return false
      }
      CD = true;       //我准备放技能了,
      setTimeout(() => {   //现在没有进入cd，当你放技能的时候然后开始启用
        console.log("冲啊!");
        fn();
        // CD = false;    //在两秒之内我的技能CD无法释放
      }, delay);
    }
  }

  return (
    <>
      <h1>冷却时间是2秒</h1>
      <button onClick={cdTime(fnOnClick, 2000)}>幻影剑舞</button>
      <TodoList />
    </>
  );
}

export default App;
