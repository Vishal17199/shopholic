import React from 'react'

//Footer

function Footer(){  
return(
    <footer className="page-footer" id="foot">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Available in</h5>
              <p className="grey-text text-lighten-4">India Australia Brazil Canada France Germany Italy Japan Mexico Netherlands Singapore Spain</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">follow us on social media</h5>
              <ul>
                <li><a  className="fa fa-facebook"></a></li>
                <li><a  className="fa fa-twitter" ></a></li>
                <li><a  className="fa fa-whatsapp"></a></li>
                <li><a  className="fa fa-instagram"></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          ©96449vishal@gmail copyright 
          <a className="grey-text text-lighten-4 right" ></a>
          </div>
        </div>
      </footer>
          
)}
export default Footer
    