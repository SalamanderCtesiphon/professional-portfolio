import React, {useEffect} from 'react'

import coffee from '../images/coffee-site.png'
import resturant from '../images/resturant-page.png'
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
    >
      <h1 className='title'>My Projects:</h1>
      <div className="work-card">
        <img src={coffee} alt="my coffee site" />
        <div className="card-info">
          <div className="title-holder">
            <h4>Coffee Importers</h4>
            <a className='web-links' href="/">live site <img src={next} alt="nav link" className='link-icon'/></a>
            <a className='web-links' href="/">github repo <img src={next} alt="nav link" className='link-icon'/></a>
          </div>
          <p className='intro-paragraph'>This is a full stack fully functional e-commerce site. This is a bunch of other useless infor mation that i am using to style this element.</p>
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
            <h4>Coffee Importers</h4>
            <a className='web-links' href="/">live site <img src={next} alt="nav link" className='link-icon'/></a>
            <a className='web-links' href="/">github repo <img src={next} alt="nav link" className='link-icon'/></a>
          </div>
          <p className='intro-paragraph'>This is a full stack fully functional e-commerce site. This is a bunch of other useless infor mation that i am using to style this element.</p>
          
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
            <div className="tech-stack">ContextAPI</div>
          </div>
        </div>
        <img src={memory} alt="my coffee site" />
      </div>
      <div className="work-card">
        <img src={resturant} alt="my coffee site" />
        <div className="card-info">
          <div className="title-holder">
            <h4>Coffee Importers</h4>
            <a className='web-links' href="/">live site <img src={next} alt="nav link" className='link-icon'/></a>
            <a className='web-links' href="/">github repo <img src={next} alt="nav link" className='link-icon'/></a>
          </div>
          <p className='intro-paragraph'>This is a full stack fully functional e-commerce site. This is a bunch of other useless infor mation that i am using to style this element.</p>
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
            <div className="tech-stack">ContextAPI</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkSection