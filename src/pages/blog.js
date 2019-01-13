import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby';

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <header className="header"> 
      <h2>This is the <span>blog</span> page</h2>
    </header> 
    <div className="pages">
      {
        data.allMarkdownRemark.edges.map(post => {
          return <Link className="pages__item"
            to={post.node.frontmatter.path}
          >
              <h3>{post.node.frontmatter.title}</h3>
              <h4>{post.node.frontmatter.date}</h4>
              <p>{post.node.frontmatter.info}</p>
            </Link>
        })
      }    
    </div>       
  </Layout>
)

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          frontmatter {
            path
            date
            title
            info
          }
        }
      }
    }
  }
`


export default SecondPage
