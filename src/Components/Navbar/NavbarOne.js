import React  from 'react'
import './NavbarOne.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import Phone_icon from '../Assets/Phone_icon.png'
import logo1 from '../Assets/logo11.png'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'

const NavbarOne = () => {
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbarone'>
      
        <div class="nav-logo">
            <img src={logo1} alt="Valley Repair Hub Logo" />
        </div>

        <ul className="nav-menu">
            <li className='nav-link'><a href="tel:+977 9745934176" class="nav-link" ><img src={Phone_icon} alt="" />+977 9745934176</a></li>
           <Link style ={{ textDecoration : 'none'}} to='/home'> <li className='nav-link'>Home</li></Link>
            <Link style ={{ textDecoration : 'none'}} to='/about'><li className='nav-link'>About</li></Link>
            <li className='nav-link'>Services</li>
            <li className='nav-link'>Blog</li>
            <Link style ={{ textDecoration : 'none'}} to='/contact'><li className='nav-link'>Contact</li></Link>
        </ul>
        <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default NavbarOne
