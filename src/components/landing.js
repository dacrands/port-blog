import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Landing = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "max-hermansson.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <main className="landing">
        <Img 
          className="landing__img" 
          fluid={data.placeholderImage.childImageSharp.fluid} 
        />

        <div className="landing__container">
          <div className="landing__title">
            <h1 className="text-focus-in">
              David Crandall
            </h1>
            <h2 className="text-focus-in">
              a full-stack web developer
          </h2>
          </div>
          <div className="landing__links">
            <a className="landing__links-link" href="">
              Github
            </a>
            <a className="landing__links-link" href="">
              Contact Me
            </a>
          </div>
        </div>
      </main>
    }
  />
)




export default Landing