import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className="header_logo">
                    <Link to="/">
                        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">AboutUs</Link></li>
                        <li><Link to="/contact">ContactUs</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
