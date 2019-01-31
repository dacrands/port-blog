import React from 'react'


import Layout from '../components/layout'
import FlaskFrame from '../components/folio/FlaskFrame'
import CardTwo from '../components/folio/CardTwo'
import CardThree from '../components/folio/CardThree'
import CardFour from '../components/folio/CardFour'
import CardFive from '../components/folio/CardFive'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Contact from '../components/contact'

import Skills from '../components/skills'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <section className="folio">
      <div className="container">
      
      <header className="folio__header">
        <h1>Portfolio</h1>
      </header>
      <div className="folio__cards">
        <FlaskFrame />
        <CardTwo />
        <CardFour />
        <CardThree />        
        <CardFive />
      </div>
      </div>
    </section>
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
