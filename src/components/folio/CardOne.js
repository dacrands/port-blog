import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardOne = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "to-view-it-2.JPG" }) {
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
      <Img className="card__img" fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="card__text">
        <h4>To View It</h4>
        <p>
          A to-do list application that features a scrolling-stocker ticker, weather information,
          and a custom background Youtube video.
        </p>
        <p>
          Features SendGrid email authentication and the YouTube IFrame API.
        </p>
        <div className="card__text-links">
          <a href="">Site</a>
        
          <a href="">Github</a>
        </div>        
      </div>
      <div className="card__stack">
        <div>Flask</div>
        <div>Postgresql</div>
        <div>Bcrypt</div>
        <div>Heroku</div>
      </div>
    </div>    
    }
  />
)



export default CardOne