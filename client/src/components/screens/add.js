import React,{useState, useEffect} from 'react'
import {  useHistory} from 'react-router-dom'
import M from 'materialize-css'

//admin can add prodcuts on website database using this page
//login is must other a popup will show 

function Add(){
  const [name,setName]=useState('')
    const [discription,setDiscription]=useState('')
    const [type,setType]=useState('')
    const [url,setUrl]=useState('')
    const [image,setImage]=useState("")
    const [price,setPrice]=useState('')
    const history = useHistory()

  if(localStorage.getItem('rload')=="false"){
    setTimeout(() => {
        window.location.reload(false)
        localStorage.removeItem('rload')
    }, 1000);
  }
useEffect(()=>{
  if(url){
    if(price  < 1){
      return    M.toast({ html:"price cannot be less  than 1", classes: "#c62828 red darken-3" })  
    }
    fetch("/addproduct", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        admintoken:localStorage.getItem('at'),
        name,
        discription,
        type,
        pic:url,
        price
    })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: "product added", classes: "#43a047 green darken-1" })
          history.push('/admindashboard')
        }
      }).catch((err)=> {
        console.log(err)
      })

  }  
  },[url])
  
      const Postpic = ()=>{
      
           const data = new FormData()
           data.append("file",image)
           data.append("upload_preset","ecommerce")
           data.append("cloud_name","dqxpziuie")
      //dont foget to add /image/upload in end of cloudnary api
      fetch('https://api.cloudinary.com/v1_1/dqxpziuie/image/upload',{
               method:"post",
               body:data
           })
           .then(res=>res.json())
           .then(data=>{
              setUrl(data.url)
           })
           .catch(err=>{
               console.log(err)
           })
       }
       document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
      });
    
    return(
    <div>
      <div className="mycard">
        <div className="card auth-card input-field" style={{boxShadow:"none"}}>
          <h3 style={{fontFamily:"Helvetica Neue"}}>Add new product</h3>
          <input
            type="text" placeholder="name"
            value={name}
        onChange={(e)=>setName(e.target.value)}
/>
          <input
            type="text" placeholder="discription"
            value={discription}
            onChange={(e)=>setDiscription(e.target.value)}
            />
          <input
            type="number" placeholder="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
             <div className="input-field col s12">
    
    <select value={type}
    defaultValue={'DEFAULT'}
        onChange={(e)=>setType(e.target.value)}
>
      <option value="DEFAULT" disabled selected>Choose product type</option>
      <option value=""></option>
      <option value="mens shirt">mens shirt</option>
      <option value="mens jeans">mens jeans</option>
      <option value="mens jacket">mens jacket</option>
      <option value="womens top">womens top </option>
      <option value="womens jeans">womens jeans</option>
      <option value="womens partywear">womens partywear</option>
    </select>
    <label>product type</label>
  </div>
  <form action="#">
    <div className="file-field input-field">
      <div>
      
        <input type="file"/>
      </div>
      <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input type="file"
        onChange={(e)=>setImage(e.target.files[0])}
        />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>

    </div>
  </form>

<button className="btn waves-effect waves-light"
onClick={()=>Postpic()}
>Add product
    <i className="material-icons right">send</i>
  </button>
        
        </div>
      </div> 
    </div>
)
}
export default Add