import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from "../Context";
import './Styles.css'

const Header = () => {
    const {cart, setCart} = CartState();
    return (
        <div>
            <span className='header'>A simple React context API shop mart</span>
            <ul className='nav'>
                <li className='prod'>
                    <Link to ='/'>Home page</Link>
                </li>
                <li className='prod1'>
                    <Link to='/cartpage'>Cart page ({cart.length})</Link>
                </li> 
            </ul>
        </div>
    )
}

export default Header
