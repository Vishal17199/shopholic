import React,{useState} from 'react'
import {  useHistory} from 'react-router-dom'
import M from 'materialize-css'

function AdminSignin(){
    const [adminId,setAdminId]=useState('')
    const [adminPassword,setAdminPassword]=useState('')
    const history = useHistory()
    
    const postData=()=>{
        fetch("/adminsignin", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            adminId,
            adminPassword
          })
        }).then(res => res.json())
          .then(data => {
            if (data.error) {
              M.toast({ html: data.error, classes: "#c62828 red darken-3" })
            }
            else {
              localStorage.setItem("at",data.admintoken)
              M.toast({ html: "login success", classes: "#43a047 green darken-1" })
              history.push('/admindashboard')
            }
          }).catch((err)=> {
            console.log(err)
          })
      }

    return(
    <div>
      <div className="mycard">
        <div className="card auth-card input-field" style={{boxShadow:"none"}}>
          <h3 style={{fontFamily:"Helvetica Neue"}}>log in as an admin</h3>
          <input
            type="text" placeholder="admin id"
    value={adminId}          
         onChange={(e)=>setAdminId(e.target.value)}
         />
          <input
            type="password" placeholder="password"
            value={adminPassword}
            onChange={(e)=>setAdminPassword(e.target.value)}
            />
          <button className="waves-effect waves-light btn darken-2 s6"
          id="signup-button"
        onClick={()=>postData()}      
         >signin</button>
          <h5>

          </h5>
        </div>
      </div>
    </div>
)
}
export default AdminSignin