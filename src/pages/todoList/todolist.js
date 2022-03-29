import React from "react";
import './todoList.css';
import { useReducer, useRef, useState } from "react";

export default function TodoList() {
  const userInput = useRef(null);
  const [showBtn, setShowBtn] = useState(false)
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, content: "敲代码" },
    { id: 2, content: "吃饭" },
    { id: 3, content: "睡觉" }
  ]
  );
  const list = state;
  function reducer(state, action) {
    console.log('action.index: ', action.index);
    switch (action.type) {
      case "add":
        if (userInput.current.value !== "") {
          return (
            [{
              id: state.length + 1,
              content: userInput.current.value
            },
            ...state]
          )
        }
        else {
          return state;
        }
      case "dec":
        return (
          [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
          ]
        )
    }

  }

  const handleKey = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      return dispatch({ type: "add" })
    }
  }

  const handleMouse = (flag) => {
    return (e) => {
      const flag1 = flag - 1;
      if (e.target.id == flag1) {
        setShowBtn(true)
      }
    }
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
            <button onClick={() => dispatch({ type: "add" })}>添加任务</button>
          </div>
        </div>

        <div className="body">
          <ul>
            {list.map(
              (iterm, index) => {
                return (
                  <li key={iterm.id}
                    id={index}
                    onMouseEnter={handleMouse(iterm.id)}
                    onMouseLeave={handleMouse(iterm.id)}
                    style={{ backgroundColor: showBtn ? "gray" : "white" }}
                  >
                    <label>
                      <input type="checkbox" />
                      {iterm.content}
                    </label>
                    <button id={index}
                      onClick={(e) => { dispatch({ type: "dec", index }) }}
                      style={{ opacity: showBtn ? 1 : 0 }}
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


