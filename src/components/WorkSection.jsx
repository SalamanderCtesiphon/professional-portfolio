import React, {useEffect} from 'react'

import coffee from '../images/coffee-site.png'
import fashion from '../images/fashion-boutique.png'
import resturant from '../images/resturant-page.png'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function WorkSection() {

  const control = useAnimation()
  const [ref, inView] = useInView()

  const boxVariant = {
    visible: { opacity: 1, scale: 1},
    hidden: { opacity: 0, scale: 0 },
  }

  useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden")
      }
    }, [control, inView]);

    
  return (
    <motion.div 
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="container"
    >
      <div className="work-card">
        <img src={coffee} alt="my coffee site" />
        <div className="card-info">
          <h4>Coffee Importers</h4>
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
          <p className='intro-paragraph'>This is a full stack fully functional e-commerce site. This is a bunch of other useless infor mation that i am using to style this element.</p>
          <div className="badges">
            <div className="tech-stack">React</div>
            <div className="tech-stack">Firebase</div>
            <div className="tech-stack">ContextAPI</div>
          </div>
        </div>
        <img src={fashion} alt="my coffee site" />
      </div>
      <div className="work-card">
        <img src={resturant} alt="my coffee site" />
        <div className="card-info">
          <p className='intro-paragraph'>This is a full stack fully functional e-commerce site. This is a bunch of other useless infor mation that i am using to style this element.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkSection