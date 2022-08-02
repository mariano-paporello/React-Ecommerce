import React from 'react'
import cart from '../cart.png';
import CartWidget from './CartWidget'
import {Link} from "react-router-dom"
const NavBar=() =>{
  return (
    <div className='divStyle'>
      <h1 className='h1Style'><Link to={"/"}>Corte Drinks</Link></h1>
      <ul className='ulStyle'>
        <li className='liStyle'>
          <Link to={"/"} className='aStyle'>Home</Link>
        </li>
        <li className='liStyle dropdown'>
          <Link to={"/"} className='aStyle '>Categories</Link>
          <div className='dropdownContent'>
            <Link to={"/category/cocktail"}>Cocktails</Link>
            <Link to={"/category/ordinary"}>Ordinary</Link>
            <Link to={"/category/familyFriendly"}>Family Friendly</Link>
          </div>
        </li>
        <li className='liStyle'>
          <Link to={"/contactUs"} className='aStyle'>Contact Us</Link>
        </li>
        <li className='liStyle'>
          <Link to={"/aboutUs"} className='aStyle'>About Us</Link>
        </li>
        <li className='liStyle'>
          <Link to={"/cart"} className='aStyle cartImage'>{CartWidget(cart)}</Link>
        </li>
      </ul>
    </div>
  )
}
export default NavBar
