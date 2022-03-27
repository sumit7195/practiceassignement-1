import React from 'react';
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </nav>

        <div>
          <Outlet />
        </div>
      </div>
    );
}

export default Navbar;
