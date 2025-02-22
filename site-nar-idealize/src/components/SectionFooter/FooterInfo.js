import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../assets/logoB&P.png';
import './footer.css';

function FooterInfo() {
  const email = 'naridealize@gmail.com';

  return (
      <div className="footer-container">
          <div className="container d-flex align-items-center justify-content-between">
              <div className="logo-container">
                  <img src={image1} alt="logo" className="img-fluid" />
              </div>
              <div className="contacts-right">
                  <h2>Contatos</h2>
                  <a href={`mailto:${email}`}>{email}</a>
                  <p className="first-number">(11) 95275-0824</p>
                  
              </div>
          </div>
      </div>
  )
}



export default FooterInfo;
