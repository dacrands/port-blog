import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Folio from '../components/folio/Folio'
import Landing from '../components/landing'
import Contact from '../components/contact'


import Skills from '../components/skills'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Folio />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
