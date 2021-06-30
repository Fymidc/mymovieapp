import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav">
            <h1>NETFLIX</h1>
            
           <Link id="nav-link" to="/login" > Sign In </Link> 
        </div>
    )
}

export default Navbar
