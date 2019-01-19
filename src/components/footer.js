import React from 'react'

const Footer = () => (
  <footer className="footer">
  <div>
    <a href="">Resume</a>
    <a href="">Github</a>
    <a href="">Email</a>
  </div>
  <div>
    © {new Date().getFullYear()},
              {` `}
    David Crandall
              </div>
  </footer>
)


export default Footer
