import React from 'react'

import coffee from '../images/coffee-site.png'
import fashion from '../images/fashion-boutique.png'
import resturant from '../images/resturant-page.png'

function WorkSection() {
  return (
    <div className="container">
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
    </div>
  )
}

export default WorkSection