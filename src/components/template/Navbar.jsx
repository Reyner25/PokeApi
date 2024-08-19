import React from 'react'
import { Link } from 'react-router-dom'

//Style
import './TeamplateCss/Navbar.css'




export const Navbar = () => {
    return (
            
    <nav className='menu'>

        <Link className='logo' to="/">ReyShop</Link>

        <ul className='lista-link'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/Productos">Productos</Link></li>  
            <li><Link to="/Contactos">Contactos</Link></li>
        </ul>

    </nav>
      )
}
