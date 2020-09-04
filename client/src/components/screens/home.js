import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Home() {



  const history = useHistory()
  const [slider1, setSlider1] = useState("")
  const [slider2, setSlider2] = useState("")
  const [latest1, setLatest1] = useState()
  const [latest2, setLatest2] = useState()
  const [latest3, setLatest3] = useState()
  useEffect(() => {
    fetch("/getslider", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(result => {
        setSlider1(result.data[0].pic)
        setSlider2(result.data[1].pic)
      }).catch((err) => {
        console.log(err)
      })
    fetch("/getlatest", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(result => {
        setLatest1(result.data1)
        setLatest2(result.data2)
        setLatest3(result.data3)
      }).catch((err) => {
        console.log(err)
      })

  }, [])

  return (
<>{
  latest3?
<div>
 <img style={{width:"100%",maxHeight:"550px"}} src={slider1} ></img>
      <hr />
      <h2 style={{ textAlign: "center" }}>  MENS FASHION</h2>

      <div className="row" id="product-row-1">
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279489/calm-man-standing-with-folded-arms-near-old-car-4321011_1_nz5dc9.jpg"></img>
              <Link to="mensshirt"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link>
            </div>
            <div className="card-content">
              <span className="card-title">Mens shirt</span>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279490/man-wearing-denim-jeans-1804075_y8xwpw.jpg"></img>
              <Link to="mensjeans"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link>
            </div>
            <div className="card-content">
              <span className="card-title">Mens jeans</span>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279489/man-wearing-black-full-zip-biker-jacket-826380_1_gmlas3.jpg"></img>

              <Link to="mensjacket"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link>
            </div>
            <div className="card-content">
              <span className="card-title">Mens jacket</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2 style={{ textAlign: "center" }}>  WOMENS FASHION</h2>
      <div className="row" id="product-row-2">
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279488/adolescent-casual-cute-elegant-428338_bijgsf.jpg"></img>

              <Link to="womenstop"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link></div>
            <div className="card-content">
              <span className="card-title">womens top</span>        </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279490/person-in-blue-denim-jeans-and-white-converse-all-stars-52574_1_booyat.jpg"></img>
              <Link to="womensjeans"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link>
            </div>
            <div className="card-content">
              <span className="card-title">womens jeans</span>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/dqxpziuie/image/upload/v1593279489/woman-holding-two-white-and-beige-shopping-paper-bags-in-974911_dw758r.jpg"></img>
              <Link to="womenspartywear"><a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i></a></Link>   </div>
            <div className="card-content">
              <span className="card-title">Womens partywear</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2 style={{ textAlign: "center", fontFamily: "ARIAL" }}>  LATEST ARRIVAL</h2>
      <div className="row" id="product-row-2">
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src={latest1.pic}></img>
              <Link className="btn-floating halfway-fab waves-effect waves-light red"
               to={'/product/'+latest1._id}
              ><i className="material-icons">add</i></Link>
            </div>
            <div className="card-content">
            <span className="card-title">{latest1.name}</span>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src={latest2.pic}></img>
              <Link className="btn-floating halfway-fab waves-effect waves-light red"
               to={'/product/'+latest2._id}
              ><i className="material-icons">add</i></Link>
            </div>
            <div className="card-content">
            <span className="card-title">{latest2.name}</span> </div>
          </div>
        </div>
        <div className="col s12 m6 l3">
          <div className="card">
            <div className="card-image">
              <img src={latest3.pic}></img>
              <Link className="btn-floating halfway-fab waves-effect waves-light red"
              to={'/product/'+latest3._id}
              ><i className="material-icons">add</i></Link>
            </div>
            <div className="card-content">
            <span className="card-title">{latest3.name}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
:


  <div 
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:"40%",
    marginTop:"80px",
    marginBottom:"80px"
  
  }}
class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>



}
   </>
  )
}
export default Home