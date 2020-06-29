import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import AdminSignin from './components/screens/adminsignin'
import AdminNavbar from './components/screens/adminnavbar'
import Add from './components/screens/add'
import Remove from './components/screens/remove'
import Slider from './components/screens/slider';
import Home from './components/screens/home'
import Mensshirt from './components/screens/mensshirt'
import Mensjeans from './components/screens/mensjeans'
import MensJacket from './components/screens/mensjacket'
import Womenstop from './components/screens/womenstop'
import Womensjeans from './components/screens/womensjeans'
import Womenspartywear from './components/screens/womenspartywear'
import Product from './components/screens/product'
import Footer from './components/screens/footer'
function App(){
 return(
     <BrowserRouter>
    <Route exact path="/" >
     <Navbar/>
     <Home/>
     <Footer/>
     </Route>
     <Route  path="/mensshirt" >
     <Navbar/>
     <Mensshirt/>
     <Footer/>
     </Route>  
     <Route  path="/mensjeans" >
     <Navbar/>
     <Mensjeans/>
     <Footer/>
     </Route>  
     <Route  path="/mensjacket" >
     <Navbar/>
     <MensJacket/>
     <Footer/>
     </Route>  
     <Route  path="/womenstop" >
     <Navbar/>
     <Womenstop/>
     <Footer/>
     </Route>  
     <Route  path="/womensjeans" >
     <Navbar/>
     <Womensjeans/>
     <Footer/>
     </Route>  
     <Route  path="/womenspartywear" >
     <Navbar/>
     <Womenspartywear/>
     <Footer/>
     </Route>  
     <Route  path="/product/:productId" >
     <Navbar/>
     <Product/>
     <Footer/>
     </Route>    
     <Route path="/adminsignin" >
     <AdminSignin/>
     </Route> 
     <Route path="/admindashboard" >
     <AdminNavbar/>     
     </Route>   
     <Route path="/admindashboardadd" >
     <AdminNavbar/>     
    <Add/>
     </Route>
     <Route path="/admindashboardremove" >
     <AdminNavbar/>     
    <Remove/>
     </Route>   
     <Route path="/admindashboardslider" >
     <AdminNavbar/>     
    <Slider/>
     </Route>   
      </BrowserRouter>  
 )
}

export default App;
