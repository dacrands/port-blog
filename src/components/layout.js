import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <footer className="footer">                   
            <div>
              <a href="">Resume</a>
              {/* <hr/> */}
              <a href="">Github</a>
              {/* <hr/> */}
              <a href="">Email</a>
            </div>
            <div>
              © {new Date().getFullYear()},
              {` `}            
              David Crandall
            </div>     
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
