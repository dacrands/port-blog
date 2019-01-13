import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardTwo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bcc-stem.PNG" }) {
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
        <h4>Bergen STEM</h4>
        <p>
        React application designed and built for the STEM Department at Bergen Community College. 
        </p>
        <p>
        Collaborated 
        with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.        
        </p>
        <div className="card__text-links">
          <a href="">Site</a>
        
          <a href="">Github</a>
        </div> 
      </div>
      <div className="card__stack">
        <div>React</div>
        <div>Fetch-API</div>
        <div>Webpack</div>
        <div>Google Analytics</div>
      </div>
    </div>    
    }
  />
)



export default CardTwo