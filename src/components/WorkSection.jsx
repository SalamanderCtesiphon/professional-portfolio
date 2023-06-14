import React, {useEffect} from 'react'

import coffee from '../images/coffee-site.png'
import resumeEditor from '../images/resume-editor.png'
import memory from '../images/memory-game.png'
import { motion, useAnimation } from "framer-motion";
import next from '../icons/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg'

import { useInView } from "react-intersection-observer";

function WorkSection() {

  const control = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0,
  })

  const boxVariant = {
    visible: { opacity: 1, scale: 1},
    hidden: { opacity: 0, scale: 0 },
  }

  useEffect(() => {
      if (inView) {
        control.start("visible");
      } /* else {
        control.start("hidden")
      } */
    }, [control, inView]);

    
  return (
    <motion.div 
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ ease: "easeOut", duration: 1 }}
      className="container"
      id='work-anchor'
    >
      <h1 className='title'>My Projects:</h1>
      <div className="work-card">
        <img src={coffee} alt="my coffee site" />
        <div className="card-info">
          <div className="title-holder">
            <h4>Coffee Importers</h4>
            <div className="links-container">
              <a className='web-links' href="https://coffee-importers-bb881.web.app/">live site <img src={next} alt="nav link" className='link-icon'/></a>
              <a className='web-links' href="https://github.com/SalamanderCtesiphon/coffee-importers">github repo <img src={next} alt="nav link" className='link-icon'/></a>
          
            </div>
          </div>
          <p className='intro-paragraph'>This is a full-stack fully functional e-commerce site. It uses firebase hosting for web hosting. Firebase authentication is implemented and is used to conditionally render a log out button that lets the user use the site as either a member or guest.</p>
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
            <div className="tech-stack">ContextAPI</div>
          </div>
        </div>
      </div>
      <div className="work-card">
        <div className="card-info">
          <div className="title-holder">
            <h4>Memory Game</h4>
            <div className="links-container">
              <a className='web-links' href="https://memory-game-1f43b.web.app/">live site <img src={next} alt="nav link" className='link-icon'/></a>
             <a className='web-links' href="https://github.com/SalamanderCtesiphon/memory-card-react-app">github repo <img src={next} alt="nav link" className='link-icon'/></a>
            </div>
          </div>
          <p className='intro-paragraph'>This is a memory game, where the player clicks a card and the display is then shuffled. The player continues selecting cards until they choose the same card twice. The players score and the all-time high score is displayed in the nav-bar.</p>
          
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
            <div className="tech-stack">State Management</div>
          </div>
        </div>
        <img src={memory} alt="my coffee site" />
      </div>
      <div className="work-card">
        <img src={resumeEditor} alt="my coffee site" />
        <div className="card-info">
          <div className="title-holder">
            <h4>Resume Editor</h4>
            <div className="links-container">
              <a className='web-links' href="https://resume-editor-cfc94.web.app/">live site <img src={next} alt="nav link" className='link-icon'/></a>
              <a className='web-links' href="https://github.com/SalamanderCtesiphon/resume-editor">github repo <img src={next} alt="nav link" className='link-icon'/></a>
            </div>
          </div>
          <p className='intro-paragraph'>This is a live resume editor. It demonstrates conditonal rendering and live updates from user inputs.</p>
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkSection