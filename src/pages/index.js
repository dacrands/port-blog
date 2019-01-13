import React from 'react'


import Layout from '../components/layout'
import CardOne from '../components/folio/CardOne'
import CardTwo from '../components/folio/CardTwo'
import CardThree from '../components/folio/CardThree'
import CardFour from '../components/folio/CardFour'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main className="landing">
      <div className="landing__container">    
        <h2 className="text-focus-in">
          <span>I'm Dave,</span> a full-stack web developer.
          I build things with React and Flask.
        </h2>
      </div>
    </main> 
    <section className="container slide-in-fwd-bottom">
        <header className="folio__header">
          <h2>Portfolio</h2>
          {/* <hr className="hr--thick"/> */}
        </header>  
        <div className="folio">        
          <CardOne />        
          <CardTwo />        
          <CardThree />        
          <CardFour />        
        </div>      
    </section>   
  </Layout>
)

export default IndexPage
