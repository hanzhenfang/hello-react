import React from 'react'
import './index.css'

export default function List(props) {
  const users = props.users

  console.log(users)
  return (
    <>
      {
        props.firstIn ? <h2> 请输入用户名称</h2> :
          props.loding ? <h2> Loding.....</h2> :
            <div className="cardBox">
              {users.map(usersObj => {
                return (
                  <div key={Math.random()} className="card">
                    <a href={usersObj.html_url} >
                      <img src={usersObj.avatar_url}
                        alt='userAvatar'
                        style={{ width: "100px" }}
                      />
                    </a>
                    <p>{usersObj.login}</p>
                  </div>
                )
              })}
            </div>
      }
    </>
  )
}

