import './App.css';
import React from 'react';
import Navbar from './NabVar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import index from './ItemListContainer/ListContainer';
import ListContainer from './ItemListContainer/ListContainer';

function App() {
  return (
    <div id='' className="App">
      <Navbar />
      <ItemListContainer />
      <ListContainer />
    </div>
  );
}

export default App;
