import React, { useState } from 'react'
import {
  FaCommentAlt,
  FaBars,
  FaRegChartBar,
  FaShoppingBag,
  FaTh, 
  FaThList, 
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
    },
    {
      path:"/employeeList",
      name:"EmployeeList",
      icon:<FaUserAlt/>
    },
    {
      path:"/addEmployee",
      name:"AddEmployee",
      icon:<FaRegChartBar/>
    },
    {
      path:"/request",
      name:"Request",
      icon:<FaCommentAlt/>
    },
    {
      path:"/rejectlist",
      name:"RejectList",
      icon:<FaShoppingBag/>
    },
    {
      path:"/setting",
      name:"Setting",
      icon:<FaThList/>
    }, {
      path:"/myProfile",
      name:"My Profile",
      icon:<FaUserAlt/>
    }
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
       <div className='top_section'>
          <h1 style={{display: isOpen ? "block" : "none", paddingLeft:20}}className='logo'>Logo</h1>
          <div style={{marginLeft: isOpen ? "8px" : "0px"}}className='bars'>
            <FaBars onClick={toggle}/>
          </div>
       </div>
    {
      menuItem.map((item, index) =>(
        <NavLink to={item.path} key={index} className="link" activeclassname="active">
          <div className='icon'>{item.icon}</div>
          <div  style={{display: isOpen ? "block" : "none"}}className='link_text'>{item.name}</div>
        </NavLink>
      ))
    }
       
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;