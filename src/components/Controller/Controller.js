import React, {useState} from 'react'
import './Controller.css'
/**
* @author
* @function Controller
**/



const Controller = (props) => {
  const [filter, setFilter] = useState("");

  const submitSearchTermHandler = (e)=> {
    e.preventDefault();
    props.orderNone();
    props.searchThis(filter);
  }
  const onClearHandler = ()=> {
    setFilter("");
    props.searchThis(filter);
  }
  let buttonClass = "btn btn-info btn-sm m-1";

  return(
    <div className="controller">  
      <form onSubmit={(e)=> submitSearchTermHandler(e)} className="form-inline my-2 my-lg-0">
        <input onChange = {(e)=> setFilter(e.target.value)}
                className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
        <button type="submit" onClick={onClearHandler} className="btn btn-link my-2 my-sm-0">Clear</button>
      </form>
     
      <div className="order-by">
       <p className="border-bottom">Order by Salary</p> 
        <div className="mt-3">
          <button onClick={props.orderUp} className={buttonClass}>Ascending</button>
          <button onClick={props.orderDown} className={buttonClass}>Descending</button>
          <button onClick={props.orderNone} className="btn btn-outline-dark btn-sm m-1"><img src="refresh.png" /></button> 
          {/* Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
        </div>
      </div>  
    </div>
   )

 }

export default Controller