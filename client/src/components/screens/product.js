import React,{useState, useEffect} from 'react'
import {  useParams} from 'react-router-dom'
import M from 'materialize-css'
function Product(){
    const {productId}=useParams()
   const [productdata,setProductdata]=useState()
   useEffect(()=>{
       fetch("/getbyid", {
           method: "post",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
                productId
           })
         }).then(res => res.json())
           .then(result => {
             setProductdata(result.data[0])             
           }).catch((err)=> {
             console.log(err)
           })
       },[])
     const buy=()=>{
        M.toast({ html:"currently we are not delivering because of covid19", classes: "#43a047 green darken-1" })
      }
    
return(
<div className="row">
    {productdata?
<div className="col s10 l6">
    <br/>
    <img style={{width:"100%"}} src={productdata.pic}></img>
<div></div>
    <h3>{productdata.name}</h3>
    <p id="price"> <h5> price - {productdata.price} RS</h5></p>
    <br/>
    
    <button className="btn"
   onClick={()=>buy()}
    >buy</button>
    <br/><br/>
    <div id="assured">
        shopholic asured
    </div>

    <br/> <br/>
    <div className="row">
    <div className="col l6 s12" id="discri">
        <h4>description</h4>
        <div>{productdata.discription}</div>
            <br/>
    </div>
    </div>
</div>
:"Loading"

    }
</div>
    )}
export default Product