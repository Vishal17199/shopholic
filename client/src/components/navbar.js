import React from "react"
import { Link } from 'react-router-dom'
import M from 'materialize-css'

function Navbar() {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


  return (
    <div>
      <nav>
        <div className="nav-wrapper" >
          <Link to="/" className="brand-logo">&nbsp;Shopholic</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          
          <ul className="right hide-on-med-and-down">

          <li><input className="input"/></li>
          <li><i className="material-icons">search</i></li>,
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">

          <li><i className="material-icons">search</i></li>,
          
      </ul>
    </div>
  )
}

export default Navbar;