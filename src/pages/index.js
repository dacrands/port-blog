import React from 'react'


import Layout from '../components/layout'
import CardOne from '../components/folio/CardOne'
import CardTwo from '../components/folio/CardTwo'
import CardThree from '../components/folio/CardThree'
import CardFour from '../components/folio/CardFour'
import CardFive from '../components/folio/CardFive'
import SEO from '../components/seo'
import Landing from '../components/landing'

import Skills from '../components/skills'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <section className="folio slide-in-fwd-bottom">
      <div className="container">
      
      <header className="folio__header">
        <h1>Portfolio</h1>
      </header>
      <div className="folio__cards">
        <CardOne />
        <CardTwo />
        <CardFour />
        <CardThree />        
        <CardFive />
      </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
