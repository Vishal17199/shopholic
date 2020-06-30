import React from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';
function AdminNavbar(){
const at=localStorage.getItem('at')
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
 return(
<div>
<nav className="nav-extended">
<div className="nav-wrapper">
  <a className="brand-logo">Dashboard</a>
  <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
  {at?<li><a onClick={()=>{
    localStorage.removeItem('at')
    window.location.reload(false)
    }}>Logout</a></li> : <li><Link to="adminsignin">signin</Link></li>
}
 </ul>
</div>
<div className="nav-content">
  <ul className="tabs tabs-transparent">
    <li className="tab"><Link 
   onClick={()=>{
    localStorage.setItem("rload","false")
   }}
   to="admindashboardadd"    >Add</Link></li>
    <li className="tab"><Link to="admindashboardremove">Remove</Link></li>
    <li className="tab disabled"><Link to="admindashboardslider">Slider</Link></li>
  </ul>
</div>
</nav>

<ul className="sidenav" id="mobile-demo">
{at?<li><a onClick={()=>{
    localStorage.removeItem('at')
    window.location.reload(false)
    }}>Logout</a></li> : <li><Link to="adminsignin">signin</Link></li>
}</ul>

</div> 
)
}

export default AdminNavbar;