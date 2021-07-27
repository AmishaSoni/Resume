import React from 'react'
import {Card,Button} from 'react-bootstrap';

export const Project = () => {
    return (
        <div>
            <div className="project_head">
                PROJECT
            </div>
            <div className="project_content">
                       <div className="card">
                           <div className="circle">
                               <h2>01</h2>
                           </div>
                           <p  className="content">
                              <h4> Management System </h4>
                               A  html ,bootstrap ,css ,js where admin can add , 
                               delete and update employee details where as employee can just view
                               details. 
                          
                           <a href="https://github.com/AmishaSoni/Admin_Employee">Code Link</a>
                           </p>
                           </div>    
                           <div className="card">
                           <div className="circle">
                               <h2>02</h2>
                           </div>
                           <p className="content">
                               <h4>To-do-list </h4>
                               A reactjs project for creating to do list 
                               where one can add,delete or update lists.
                               
                           
                           <a href="https://github.com/AmishaSoni/todolist">Code Link</a>
                           </p>
                           </div>    
                           <div className="card">
                           <div className="circle">
                               <h2>03</h2>
                           </div>
                           <p className="content">
                              <h4>Calculator</h4> 
                               A html css js based project where one can easily do calculations of number.
                           
                           <a href="https://github.com/AmishaSoni/Calculator">Code Link</a>
                           </p>
                           </div>    

  
            </div>
            
        </div>
    )
}
export default Project;
