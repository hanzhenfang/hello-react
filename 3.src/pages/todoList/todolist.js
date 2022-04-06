import React from "react";
import { useReducer, useRef } from "react";

import './todoList.css';

export default function TodoList() {
  const userInput = useRef(null);
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, content: "敲代码", done: false },
    { id: 2, content: "吃饭", done: false },
    { id: 3, content: "睡觉", done: false }
  ]
  );
  const list = state;
  function reducer(state, action) {
    switch (action.type) {
      case "actionAdd":
        const newList = [{
          id: state.length + 1,
          content: userInput.current.value,
          done: false
        },
        ...state];
        return newList;
      case "actionDec"://这里并不是操作点击的那个元素，而是重新选择了数组中的该元素之前的元素然后合并数组之后的元素
        return (
          [
            ...state.slice(0, action.id), //重新选择了数组中点击删除按钮之前的元素
            ...state.slice(action.id + 1) //重新选择了数组中点击删除按钮之后的元素
          ]
        )

      case "actionChecked":
        console.log(action.done)
        return state

      default: {
        throw console.error("错误");
      }
    }
  }

  // 敲回车触发的事件
  const handleKey = (e) => {
    //e是键盘事件，keyCode13是回车键。然后判断用户输入是否为空值，如果为空值那么就不执行dispatch的推送
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch({ type: "actionAdd" })
    }
  }

  //鼠标移入高亮事件👇
  const handleMouseEnter = (e) => {
    const id = e.target.id
    const li = document.getElementById(id)
    console.log('li');
    li.style.backgroundColor = "pink";
    li.querySelector("button").style.opacity = "1";
  }

  //鼠标移出高亮事件👇
  const handleMouseLeave = (e) => {
    const id = e.target.id
    const li = document.getElementById(id)
    li.style.backgroundColor = "white";
    li.querySelector("button").style.opacity = "0";
  }

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div>
            <label>
              <input ref={userInput}
                type="text"
                placeholder="输入你想做的事情"
                onKeyUp={handleKey}
                maxLength="5"
              />
            </label>
          </div>

          <div>
            <button onClick={() => {
              if (userInput.current.value === "") {
                alert("请输入你想做的事情")
                return null;
              }
              console.log(userInput.current.value)
              dispatch({ type: "actionAdd" });
            }}>
              添加任务
            </button>
          </div>
        </div>

        <div className="body">
          <ul>
            {list.map(
              (iterm, index) => {
                return (
                  //注意，这里的key的值不建议使用index，diff算法会重新渲染所有列表，会影响性能
                  <li key={iterm.id}
                    id={index}
                    className
                    style={{ backgroundColor: "white" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <label>
                      <input type="checkbox" checked={iterm.done} onChange={(e) => dispatch({ type: "actionChecked", index, done: e.target.checked })} />
                      {iterm.content}
                    </label>
                    <button id={index}
                      onClick={(e) => {
                        if (window.confirm("确定删除吗?")) {
                          dispatch({ type: "actionDec", id: index })
                        }
                      }}
                      style={{ opacity: 0 }}
                    >
                      删除</button>
                  </li>
                )
              }
            )}
          </ul>
        </div>

        <div className="footer">
          <div>
            <label>
              <input type="checkbox" />
              <span>已完成/全部</span>
            </label>
          </div>

          <div>
            <button>删除所有任务</button>
          </div>
        </div>

      </div>
    </>
  )
}
