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
            <Link to={"/category/Cocktail"}>Cocktails</Link>
            <Link to={"/category/Ordinary Drink"}>Ordinary Drinks</Link>
            <Link to={"/category/Shot"}>Shots</Link>
          </div>
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
