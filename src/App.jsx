import './App.css';
import logo from './icons/icons8-merge-git-100.png'
import resumeDownLoad from './assets/ShannonBrookshire.pdf'
import { useState, useEffect } from 'react'
import WorkSection from './components/WorkSection';
import Hero from './components/Hero';
import LeftSideBar from './components/LeftSideBar';
import LoadPage from './components/LoadPage';

function App() {
  const [loading, setLoading] = useState(false)
  let color= useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
         <LoadPage 
          color={color}
          loading={loading}
         />
        :
          <div>
            <LeftSideBar />
            <section className='right-side-bar'>
              <p><a href="swbrookshire@gmail.com">swbrookshire@gmail.com</a></p>
              <div id="other-line"></div>
            </section>
            <header>
              <img id='logo' src={logo} alt="my logo" />
              <div className="link-container">
                <div className="link-container-child-one">
                  <div className="link">About</div>
                  <div className="link">Work</div>
                  <div className="link">Contact</div>
                </div>
                <div className="resume-link"><a id="sticky" href={resumeDownLoad}>Resume</a></div>
              </div>
            </header>
            <Hero />
            <div className="spacer"></div>
            <WorkSection />           
            <div className="container">
              <h1 className="title">About me</h1>
              <p className="about-paragraph">I am plagued by an insatiable curiosity, which has led me to my current path in life. When I was in high school I spent way too much time in the school library researching whatever topic had caught my attention. I remember one time during my junior year I was sitting at a table by myself in the library reading the spiritual classic the 'Bhagavad Gita' and I thought to myself, 'I can't even discuss what I am reading with my friends. They would have no idea what I would be talking about.' I felt so strange and out of place.</p>
              <p className="about-paragraph">This idiosyncrasy led me to learn 6502 Assembly language when I first decided to learn to code about three years ago. At the time, I had a slight inkling that I wanted to learn coding, but I wasn't too sure of what I needed to do. So, I watched a few videos about computer science, real low-level stuff about chip-set architecture and hardware design, and I decided that I wanted to learn 6502 assembly because of the impact that that CPU had on my life. I ordered a text-book written in the 1970's. I set up an old emulator on my laptop and worked my way through that book. I knew at the time how impractical I was being learning a programming language that hadn't been used in decades. But my curiosity was ignited. I never really accomplished much with it, maybe coding a couple of script fragments that perform some basic arithmetic, but I learned a lot about the fundamentals of computer programming, like: CPU architecture, manual memory allocation, binary and hexadecimal notation, how to convert numbers from decimal to hex to binary, registers, control flow, and many other programming concepts.</p>
              <p className="about-paragraph">I soon realized that I couldn't do anything practical with what I had learned and I decided to try something more modern. So, I did a brief search on the most popular programming languages and decided that it was time to learn python. I watched a few tutorials and coded a couple of simple video games like pong and jump man following along copying the tutorials. Yet, I still felt like I wasn't making any progress towards becoming employable.</p>
              <p className="about-paragraph">So, I decided to do some more research. I began searching for the best ways to learn to code and get a job. I finally discovered from multiple sources that The Odin Project was probably the best free open-source resource for learning to code for a newbie. So, ten or so months ago I decided to dedicate my self to completing the curriculum provided by The Odin Project. I resolved myself to not give up and to keep pressing forward no matter what. The experience was a challenge unlike anything I had trued before. And there were times when I was sure that I would never be able to accomplish my goal. But with persistence and determination I was able to complete their entire front-end course curriculum. Now, looking back I feel very confident that I can overcome any technical challenge presented to me, and provide professional, robust and high-performance solutions. If you made it this far, thanks a million for taking the time to read a little about me. I really hope to hear from you in the future.</p>
            </div>
            <div className="container">
              <h1 className="title">Contact</h1>
              <p>contact info goes here</p>
            </div>
            <div className="footer">
              <small>this web site is a poor clone of a much better website by a wonderful developer <a className='nav-link' href="https://v4.brittanychiang.com/">Brittany Chaing</a></small>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
