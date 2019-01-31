import React from 'react'

import HtmlSvg from '../images/skills/html-5-logo.svg'
import FlaskSvg from '../images/skills/flask-logo.svg'
import CssSvg from '../images/skills/css-3-logo.svg'
import PostmanSvg from '../images/skills/postman-logo.svg'
import SassSvg from '../images/skills/sass-logo.svg'
import WebpackSvg from '../images/skills/webpack-logo.svg'
import ReduxSvg from '../images/skills/redux-logo.svg'
import ReactSvg from '../images/skills/react-logo.svg'
import NodeSvg from '../images/skills/nodejs-logo.svg'
import HerokuSvg from '../images/skills/heroku-logo.svg'
import JsSvg from '../images/skills/js-logo.svg'

const Skills = () => (
  <div className="logos">
    <div className="logos__container">
      <div className="container">
        <h1>Stack</h1>
        {/* <hr /> */}
        <h3>Here's a list of the things I use (essentially) everyday</h3>
        <div className="stack">
          <div className="stack__row">
          
          <div className="stack__item">
            <h3>Skills</h3>
            <ul>
              {
                [
                  "ajax", 
                  "responsive-web design", 
                  "user-authentication", 
                  "relation databases"
                ].map(skill => (
                  <li>{skill}</li>
                ))
              }              
            </ul>
          </div>
          <div className="stack__item">
            <h3>Languages</h3>
            <ul>
              {
                [
                  "Python", 
                  "JavaScript", 
                  "HTML", 
                  "CSS"
                ].map(skill => (
                  <li>{skill}</li>
                ))
              }              
            </ul>
          </div>
          </div>
          <div className="stack__row">
          
          <div className="stack__item">
            <h3>Frameworks/Libraries</h3>
            <ul>
            {
                [
                  "React", 
                  "Flask", 
                  "SQLAlchemy", 
                  "Webpack", 
                  "React/Redux", 
                  "Sass",                   
                ].map(skill => (
                  <li>{skill}</li>
                ))
              } 
            </ul>
          </div>
          <div className="stack__item">
            <h3>Tools</h3>
            <ul>
            {
                [
                  "Git", 
                  "Heroku", 
                  "DigitalOcean", 
                  "VS code"
                ].map(skill => (
                  <li>{skill}</li>
                ))
              } 
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="logos__inner">
        <span className="logos__svgs">
          <HtmlSvg style={styles.svg} />
          <CssSvg style={styles.svg} />
          <JsSvg style={styles.svg} />
          <ReactSvg title="react" style={styles.svg} />
          <NodeSvg style={styles.svg} />
          <SassSvg style={styles.svg} />
          <PostmanSvg style={styles.svg} />
          <WebpackSvg style={styles.svg} />
          <ReduxSvg style={styles.svg} />
          <FlaskSvg style={styles.svg} />
          <HerokuSvg style={styles.svg} />
        </span>
        <span className="logos__svgs">
          <HtmlSvg style={styles.svg} />
          <CssSvg style={styles.svg} />
          <JsSvg style={styles.svg} />
          <ReactSvg title="react" style={styles.svg} />
          <NodeSvg style={styles.svg} />
          <SassSvg style={styles.svg} />
          <PostmanSvg style={styles.svg} />
          <WebpackSvg style={styles.svg} />
          <ReduxSvg style={styles.svg} />
          <FlaskSvg style={styles.svg} />
          <HerokuSvg style={styles.svg} />
        </span>
      </div>
    </div>
  </div>
)

const styles = {
  svg: {
    height: '200px',
    width: '200px',
    margin: '1rem',
    // float: 'left',
  }
}

export default Skills;

