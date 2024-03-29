import React from 'react'
import cart from '../cart.png';
import CartWidget from './CartWidget'
import {Link} from "react-router-dom"
const NavBar=() =>{
  return (
    <div className='divStyle'>
      <h1 className='h1Style'><Link to={"/"}> <img src="./images/drinkLogo.png" alt="" />Corte Drinks</Link></h1>
      <ul className='ulStyle'>
        <li className='liStyle dropdown'>
          <Link to={"/"} className='aStyle '>Categories</Link>
          <div className='dropdownContent'>
            <Link to={"/category/Cocktail"}>Cocktails</Link>
            <Link to={"/category/Beer"}>Beer</Link>
            <Link to={"/category/Ordinary Drink"}>Ordinary Drinks</Link>
            <Link to={"/category/Shot"}>Shots</Link>
            <Link to={"/category/Party Drink"}>Party Drinks</Link>
            <Link to={"/category/Homemade Liqueur"}>Homemade Liqueur</Link>
            <Link to={"/category/Soft Drink"}>Soft Drink</Link>
            <Link to={"/category/Cocoa"}>Cocoa</Link>
            <Link to={"/category/Other"}>Other</Link>
          </div>
        </li>
        <li className='liStyle'>
        </li>
        <li className='liStyle'>
          <Link to={"/cart"} className='cartAStyle cartImage'>{CartWidget(cart)}</Link>
        </li>
      </ul>
    </div>
  )
}
export default NavBar
