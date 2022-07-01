import React from 'react'

export default function nav() {
  return (
    <div style={divStyle}> 
    <h1 style={h1Style}>E-commerce</h1>
    <ul style={ulStyle}>
  <li style={liStyle}><a style={aStyle} href="#Inicio">Inicio</a></li>
  <li style={liStyle}><a style={aStyle} href="#Productos">Productos</a></li>
  <li style={liStyle}><a style={aStyle} href="#Contactanos">Contactanos</a></li>
  <li style={liStyle}><a style={aStyle} href="#Sobre Nosotros">Sobre Nosotros</a></li>
</ul>
</div>
  )
}

let divStyle = {
  display: "flex",
  overflow: "hidden",
  backgroundColor: "#333",
}
let h1Style = {
  display: "flex",
  flexBasis: "70%",
  paddingLeft: "2vw",
  color: "white",
}

let ulStyle = {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#333",
  flexBasis: "30%",
}
let liStyle = {
  float: "left",
  display: "flex",
  alignItems: "center",
}
let aStyle = {
  display: "flex",
  color: "white",
  textAlign: "center",
  padding: 14,
  textDecoration: "none",
}