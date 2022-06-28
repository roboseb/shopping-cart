import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        
      <div id="nav">
          <h1>Navbar</h1>
          <ul id='navlinks'>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/store'>
                <li>Store</li>
              </Link>
          </ul>
      </div>
    );
  }
  
  export default Nav;
  