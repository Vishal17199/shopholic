import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//this page show all mens jeans available on database

function MensJeans() {


  const [mensjeans, setMensjeans] = useState([])
  useEffect(() => {
    fetch("/getbytype", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: "mens jeans"
      })
    }).then(res => res.json())
      .then(result => {
        setMensjeans(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <div style={{ textAlign: 'center' }}><h3>mens jeans</h3></div>
      <div className="row">
        {mensjeans.map(items =>
          <div className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <img src={items.pic} alt="product"></img>

                <Link to={'/product/' + items._id} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i>
                </Link> </div>
              <div className="card-content">
                <span className="card-title">{items.name}<span style={{ float: "right" }}>{items.price} Rs</span></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default MensJeans