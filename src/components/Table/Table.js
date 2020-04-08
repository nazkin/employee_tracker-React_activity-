import React from 'react'
import './Table.css'
/**
* @author
* @function Table
**/

const Table = (props) => {
  return(
    <div className="container table-d">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>    
          </tr>
        </thead>
      </table>
    </div>
   )

 }

export default Table