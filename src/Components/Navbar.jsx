import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
        Navbar
        <Link to="/">Home</Link>
        <Link to="/total">Total Todos</Link>
    </div>
  )
}

export default Navbar