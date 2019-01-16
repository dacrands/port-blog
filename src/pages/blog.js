import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby';

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <header className="header"> 
      <div className="container">
        <h2 className="text-focus-in"><span>Blog</span> page</h2>
      </div>    
    </header> 
    <div className="pages">
      <div className="pages__container slide-in-fwd-bottom">
        {
          data.allMarkdownRemark.edges.map(post => {
            return <Link className="pages__item"
              to={post.node.frontmatter.path}
            >
                <h3>{post.node.frontmatter.date}</h3>
                <h4>{post.node.frontmatter.title}</h4>
                <p>{post.node.frontmatter.info}</p>
              </Link>
          })
        }    
      </div>      
    </div>       
  </Layout>
)

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort:{ order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            info
          }
        }
      }
    }
  }
`


export default SecondPage
