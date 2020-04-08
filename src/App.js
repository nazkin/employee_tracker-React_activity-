import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Controller from './components/Controller/Controller';
import Table from './components/Table/Table';
import companyEmployees from './data';


function App() {
  const [workers, setWorkers] = useState([...companyEmployees]);
  const [salaryOrder, setSalaryOrder] = useState(""); // 1) "" 2) "up" 3) "down" **ONLY 3 POSSIBLE VALUES
  const [search, setSearch] = useState("");

  const ascendingHandler =()=> {
    setSalaryOrder("up");

  }
  const decendingHandler =()=> {
    setSalaryOrder("down");

  }
  const defaultOrder = ()=> {
    setSalaryOrder("");
  }
  const setSearchHandler = (value)=> {
    setSearch(value);
  }

  return (
    <div className="App">

        <Navbar />
        <h2 className="title">Employee Management System</h2>

        <Controller  order={salaryOrder}
         orderUp={ascendingHandler} 
          orderDown={decendingHandler}
           orderNone={defaultOrder}
            searchThis={setSearchHandler} />

        <Table order={salaryOrder}
                searchTerm={search} 
                  workers={workers}/>
    </div>
  );
}

export default App;
