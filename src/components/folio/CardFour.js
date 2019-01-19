import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardFour = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nyt-app.PNG" }) {
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
        <div className="card__info">
          <Img className="card__img" fluid={data.placeholderImage.childImageSharp.fluid} />
          <ul className="card__stack">
            {
              [
                'React',
                'Redux',
                'Sass',
                'Flask Proxy Server'].map(skill => (
                  <li>{skill}</li>
                ))
            }
          </ul>
        </div>
        <div className="card__text">
          <h4>New York Times App</h4>
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