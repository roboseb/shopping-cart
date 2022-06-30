import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        
      <div id="nav">
          <h1>LAYTHeRe.CA</h1>
          <ul id='navlinks'>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <li id='homelink'>Home</li>
              </Link>
              <Link to='/store' style={{ textDecoration: 'none' }}>
                <li id='storelink'>Store</li>
              </Link>
          </ul>
      </div>
    );
  }
  
  export default Nav;
  