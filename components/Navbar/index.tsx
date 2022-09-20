import React from 'react'

function Navbar() {
  return (
    <nav className="primary_nav">
            <ul className="nav-list flex-item flex-item-space" role="list">
              <li>
                <a className="clr_neutral_100 fs_nav fw_nav_md" href="#">Product</a>
              </li>
              <li>
                <a className="clr_neutral_100 fs_nav fw_nav_md" href="#">Services</a>
              </li>
              <li>
                <a className="clr_neutral_100 fs_nav fw_nav_md" href="#">About</a>
              </li>
              <li>
                <a className="clr_neutral_100 fs_nav fw_nav_lg btn-class" href="#">Login</a>
              </li>
            </ul>
          </nav>
  )
}

export default Navbar