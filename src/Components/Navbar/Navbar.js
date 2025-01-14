import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  

  return (
    <div className='navbar'>
      
      <ul className="nav-menu">
        <li onclick={()=>{setMenu("shop")}}><Link style ={{ textDecoration : 'none'}} to='/shop'>Shop </Link>{menu === "shop"?<h/> : <></>}</li>
        <li onclick={()=>{setMenu("mens")}}><Link  style={{ textDecoration : 'none'}} to='/mens'>Microwave Oven</Link>{menu === "mens"?<h/> : <></>}</li>
        <li onclick={()=>{setMenu("womens")}}><Link style={{ textDecoration : 'none'}} to='/womens'>Washing Machine</Link>{menu === "womens"?<h/> : <></>}</li>
        <li onclick={()=>{setMenu("kids")}}><Link style={{ textDecoration : 'none'}} to='/kids'>Refrigerator</Link>{menu === "kids"?<h/> : <></>}</li>
      </ul>
      
      
    </div>
  )
}

export default Navbar
