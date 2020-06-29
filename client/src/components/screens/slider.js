import React,{useState, useEffect} from 'react'
import {  useHistory} from 'react-router-dom'
import M from 'materialize-css'

function Slider(){
    const [url,setUrl]=useState('')
    const [image,setImage]=useState("")
    const history = useHistory()
    
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
      });
    
    
useEffect(()=>{
  if(url){
    fetch("/addslider", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        admintoken:localStorage.getItem('at'),
        pic:url,
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
        if(!image){
            M.toast({html:"plase select image",classes:"#c62828 red darken-3"})
            return
          }
        document.getElementById('loading-w').style.display='inline'
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

    return(
    <div>
      <div className="mycard">
        <div className="card auth-card input-field" style={{boxShadow:"none"}}>
          <h4 style={{fontFamily:"Helvetica Neue"}}>Add new image in slider</h4>
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
        <div style={{textAlign:"center"}}><h4 id="loading-w" style={{display:"none"}}>updating..please wait</h4></div>
      </div> 
    </div>

)
}
export default Slider