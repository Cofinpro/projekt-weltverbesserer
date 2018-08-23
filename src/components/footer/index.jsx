import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./style.css";


class Footer extends React.Component {
  render() {
    return(
      <footer className="footer text-black border-top-orange padding-25-top padding-20-bottom margin-120-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 align-self-end">
            <div className="row">
              <div className="col-12">
                <p className="text-center text-md-left text-address margin-5-bottom">
                  Cofinpro AG
                  <br />
                  Untermainkai 27-28
                  <br />
                  60329 Frankfurt am Main
                  <br />
                  Tel +49 (0) 69 - 299 20 87 60
                  <br />
                  Fax +49 (0) 69 - 299 20 87 61
                  <br />
                  E-Mail:{' '}
                  <a
                    className="text-black"
                    href="mailto:welcome@cofinpro.de"
                  >
                    welcome@cofinpro.de
                  </a>
                </p>
              </div>
            </div>
           

            <div className="row padding-footer-links footer-pages-nav">
              <div className="col">
                <ul className="nav-footer nav justify-content-center justify-content-md-end text-center text-md-right">
                  
                    <Link
                      to={'/datenschutz'}
                      className="nav-link text-black"
                    >
                      DATENSCHUTZ
                    </Link>
            
                    <Link
                      to={'/agb'}
                      className="nav-link text-black"
                    >
                      AGB
                    </Link>
                 
                 
                    <Link
                      to={'/impressum'}
                      className="nav-link text-black"
                    >
                      IMPRESSUM
                    </Link>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  
    
  }
  }
  export default Footer;