import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog">
      <Header/>
      <div className="blog__post">
        <div className="blog__post-title">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>        
        <div 
          className="blog__post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />        
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`