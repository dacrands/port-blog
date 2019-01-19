import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Navbar = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar__container">  
      <Link
        to="/"
        activeStyle={{borderBottom:'4px solid #2c2a2a'}}
      >Home</Link>
      {` `}
      <Link
        to="/blog"
        activeStyle={{borderBottom:'4px solid #2c2a2a'}}
      >Blog</Link>
    </div>    
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: `David Crandall`,
}

export default Navbar
