import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'

//admin can remove products from database using this page
//this page show list of all products with delete button
//admin login is needed

function Remove() {
  const history = useHistory()
  const [posts, setPosts] = useState([])



  useEffect(() => {
    fetch("/allproducts", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(data => {
        setPosts(data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  const deletePost = (_id) => {
    fetch("/deleteproduct", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        admintoken: localStorage.getItem('at'),
        productId: _id
      })
    }).then(res => res.json())
      .then(data => {

        if (data.error) {
          M.toast({ html: data.error, classes: " red darken-1" })
        } else {
          M.toast({ html: "product deleted", classes: "#43a047 green darken-1" })
          window.location.reload(false);
        }
      }).catch((error) => {
        console.log(error)
      })

  }

  return (
    <div>

      <div className="row">
        {posts.map(items =>
          <div className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <img src={items.pic}
                  alt="hyd"
                  style={{ width: "100%" }} />
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"
                  onClick={() => deletePost(items._id)}
                >delete</i></a>
              </div>

              <div className="card-content">
                <span className="card-title"><b>{items.name}</b><span style={{ float: "right" }}>{items.price} Rs</span> </span>
                <p>{items.discription}</p>
              </div>
            </div>
          </div>
        )
        }

      </div>

    </div>
  )
}
export default Remove