import React from 'react';
import { Link } from "react-router-dom";
import '../Styling/Styles.css';

const Navbar = () => {
    
  return (
    <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/scorecard">SCORE-CARD</Link>
        <Link to="/reporting">REPORTING</Link>
        <Link to="/graphiques">GRAPHIQUES</Link>
        <Link to="/pdca">PDCA</Link>
        <div className="right-links">
        {!localStorage.getItem("token")?(
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
          </>
        ):(<Link to="/logout">Logout</Link>)
        } 
        </div>

    </nav>
  )
}
export default Navbar

