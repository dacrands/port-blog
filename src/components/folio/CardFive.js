import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardFour = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "port-blog.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <div className="card">
        <div className="card__stack">
          <Img className="card__img" fluid={data.placeholderImage.childImageSharp.fluid} />
          <div>React</div>
          <div>Redux</div>
          <div>Sass</div>
          <div>Flask Proxy Server</div>
        </div>
        <div className="card__text">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum dolorum possimus nulla consequatur?</p>
          <div className="card__text-links">
            <a href="">Site</a>

            <a href="">Github</a>
          </div>
        </div>
      </div>
    }
  />
)



export default CardFour