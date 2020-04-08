import React from 'react'
import './Table.css'
/**
* @author
* @function Table
**/

const Table = (props) => {



function compareObjectAscending(o1, o2){
  if(o1.salary > o2.salary){
    return 1;
  }else if(o1.salary == o2.salary){
    return 0;
  }else {
    return -1;
  }
}
function compareObjectDescending(o1, o2){
  if(o1.salary > o2.salary){
    return -1;
  }else if(o1.salary == o2.salary){
    return 0;
  }else {
    return 1;
  }
}

let workersList = null;
if(props.searchTerm == ""  && props.order === ""){
  console.log(props.searchTerm)
   workersList = props.workers.map(emp=> {
    return (
      <tr key={emp.id}>
         <th scope="row">{emp.id}</th>
         <td>{emp.name}</td>
         <td>{emp.title}</td>
         <td>{emp.department}</td>
         <td>{"$ "+emp.salary}</td>
      </tr>
    )
  });
} else if (props.searchTerm == "" && props.order === "up"){
  let arrUp = [...props.workers];
  arrUp.sort(compareObjectAscending);
  workersList = arrUp.map(emp=> {
    return (
      <tr key={emp.id}>
         <th scope="row">{emp.id}</th>
         <td>{emp.name}</td>
         <td>{emp.title}</td>
         <td>{emp.department}</td>
         <td>{"$ "+emp.salary}</td>
      </tr>
    )
  });
}else if (props.searchTerm == "" && props.order === "down"){
  let arrDown = [...props.workers];
  arrDown.sort(compareObjectDescending);
  workersList = arrDown.map(emp=> {
    return (
      <tr key={emp.id}>
         <th scope="row">{emp.id}</th>
         <td>{emp.name}</td>
         <td>{emp.title}</td>
         <td>{emp.department}</td>
         <td>{"$ "+emp.salary}</td>
      </tr>
    )
  }); 
}else if(props.searchTerm != ""){
  console.log('next@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222')
}
 
  return(
    <div className="container table-d">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>    
          </tr>
        </thead>
        <tbody className="table-body">
          {workersList}
        </tbody>
      </table>
    </div>
   )

 }

export default Table