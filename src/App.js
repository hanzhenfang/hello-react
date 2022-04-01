import React from 'react';
import List from './list/index'
import SearchHeader from './searchHeader/index'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [firstIn, setFirstIn] = useState(true)
  const [loding, setLoding] = useState(false)


  return (
    <>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <SearchHeader
          setUsers={setUsers}
          setFirstIn={setFirstIn}
          setLoding={setLoding}
        />


        <List
          users={users}
          firstIn={firstIn}
          loding={loding}
        />
      </div>
    </>
  );
}

export default App;
