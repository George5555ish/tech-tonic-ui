import React from 'react'
import BoldoCustomLogo from '../../fragments/BoldoCustomLogo'

function Footer() {
  return (
    
    <footer className="container default_padding_main | footer">
    <div className="footer_container">
      <div className="footer_left">
     
     <div className="footer_logo_container">
     <BoldoCustomLogo
        textColor={"#0a2640"}
        logoColor={"#0a2640"}
      />
     </div>
    

        <p className="fw_body fs_body_sm text_neutral_600">
          Social media validation business model canvas graphical user
          interface launch party creative facebook iPad twitter.
        </p>
        <p className="rights_reserved">All rights reserved.</p>
      </div>
      <nav>
        
      <ul className="footer_ul">
        <li>
          <a className="heading">Landings</a>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Services</a>
        </li>
      </ul>

      <ul className="footer_ul">
        <li>
          <a className="heading">Company</a>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li className="flex-item flex-item-space">
          <a>Careers</a> <strong>Hiring!</strong>
        </li>
        <li>
          <a>Services</a>
        </li>
      </ul>

      <ul className="footer_ul">
        <li>
          <a className="heading">Resources</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Services</a>
        </li>
      </ul>
      </nav>
    </div>
  </footer>
  )
}

export default Footer