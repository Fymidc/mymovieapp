import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Navbar(props) {

    console.log("navbarauth:",props.auth)
    return (
        <div className="nav">
            <h1>NETFLIX</h1>

           {props.auth===false ? <Link id="nav-link" to="/login" > Sign In </Link>:""} 
            
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Navbar)
