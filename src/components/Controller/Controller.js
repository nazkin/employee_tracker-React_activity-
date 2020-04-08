import React from 'react'
import './Controller.css'
/**
* @author
* @function Controller
**/

const Controller = (props) => {

  let buttonClassA = "btn btn-info btn-sm m-1";
  let buttonClassD = "btn btn-info btn-sm m-1";
  return(
    <div className="controller">  
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="order-by">
        Order by Salary
        <div>
          <button className={buttonClassA}>Ascending</button>
          <button className={buttonClassD}>Descending</button>
        </div>
      </div>
     
    </div>
   )

 }

export default Controller