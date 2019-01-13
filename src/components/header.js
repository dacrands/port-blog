import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
