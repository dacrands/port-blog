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
    <div className="logos__svgs"> 
      <HtmlSvg style={styles.svg}/>
      <CssSvg style={styles.svg}/>   
      <JsSvg style={styles.svg}/>   
      <ReactSvg title="react" style={styles.svg}/>
      <NodeSvg style={styles.svg}/>
      <SassSvg style={styles.svg}/>
      <PostmanSvg style={styles.svg}/>
      <WebpackSvg style={styles.svg}/>
      <ReduxSvg style={styles.svg}/>
      <FlaskSvg style={styles.svg}/>
       
      <HerokuSvg style={styles.svg}/>
         
    </div>   
  </div>
)

const styles = {
  svg: {
    height: '70px',    
    width: '70px', 
    margin: '1rem',       
    // float: 'left',
  }
}

export default Skills;

