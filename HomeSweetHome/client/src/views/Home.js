import React from 'react';
import {Link} from '@reach/router';
import './home.css'

function Home() {

    return (
        <div className="Home">
            
            <Link to={"/rv/lister"} class="Link">List Your RV!</Link>
            |
            <Link to={"/RenterLoginNReg"} class="Link">Sign Up</Link>
            |
            <Link to={"/RenterLoginNReg"} class="Link">Login</Link>
            {/* Probably be a navigation bar */}
            <h1 id="mainH1">Welcome to Home Sweet Home!</h1>  
            <h2>Your one-stop-shop for a Covid-Safe Quick Getaway and Home away from Home!</h2>
            <h3 id="mainH3">Let's check out some RV's to Rent!</h3>
            <Link to={"/rv"} class="Link">Click here for RV's</Link>
        </div>
    )
}


export default Home;

