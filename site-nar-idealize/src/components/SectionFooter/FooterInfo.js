import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../assets/logoB&P.png';
import './footer.css';

function FooterInfo() {
    const email = 'naridealize@gmail.com';

    return (
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src={image1} alt="logo" className="img-fluid" />
              </div>
              <div className="col-sm-6 contacts-right">
                <h2>Contatos</h2>
                <a href={`mailto:${email}`}>{email}</a>
                <p className="first-number">(11) 95275-0824</p>
                <p>(11) 95135-2040</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FooterInfo;