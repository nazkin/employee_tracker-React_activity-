import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Controller from './components/Controller/Controller';
import Table from './components/Table/Table';
function App() {
  return (
    <div className="App">
      <Navbar />
        <h2>Employee Management System</h2>
        <Controller />
        <Table />
    </div>
  );
}

export default App;
