import React from 'react';
import List from './list/index'
import SearchHeader from './searchHeader/index'

function App() {
  return (
    <>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <SearchHeader />
        <List />
      </div>
    </>
  );
}

export default App;
