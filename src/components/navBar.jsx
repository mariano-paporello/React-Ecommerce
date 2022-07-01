import React from 'react'
import cart from '../cart.png';
import CartWidget from './cartWidget'
export default function nav() {
  return (
    <div className='divStyle'> 
    <h1 className='h1Style'>E-commerce</h1>
    <ul className='ulStyle'>
  <li className='liStyle'><a className='aStyle' href="#Inicio">Inicio</a></li>
  <li className='liStyle'><a className='aStyle' href="#Productos">Productos</a></li>
  <li className='liStyle'><a className='aStyle' href="#Contactanos">Contactanos</a></li>
  <li className='liStyle'><a className='aStyle' href="#Sobre Nosotros">Sobre Nosotros</a></li>
  <li className='liStyle'><a className='aStyle cartImage' href="#carrito">{CartWidget(cart)}0</a> </li>
</ul>
</div>
  )
}
