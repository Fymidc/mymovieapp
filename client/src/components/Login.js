import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
    <div className="nav">
        <h1>NETFLIX</h1>
        
        <img id="landing-bg" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>

        <div className="login-form">
            <div>
                <h2>Sign In</h2>
                <input type="text" placeholder="E-MAİL" />
                <input type="password" placeholder="PASSWORD"/>
                <button> Sign In </button>
            </div>

            <a href="/"> <i class="fa fa-google-plus" aria-hidden="true"></i>  Login With Google </a>
            
            
            <h5>New to Netflix?</h5>
            <Link id="sign-up" to="/" >Sign up now</Link>
        </div>
    </div>
    )
}

export default Login
