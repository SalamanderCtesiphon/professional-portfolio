import './App.css';
import { useState, useEffect } from 'react'
import WorkSection from './components/WorkSection';
import Hero from './components/Hero';
import LeftSideBar from './components/LeftSideBar';
import LoadPage from './components/LoadPage';
import RightSideBar from './components/RightSideBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';

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
            <RightSideBar />
            <Header />
            <Hero />
            <div className="spacer"></div>
            <WorkSection />           
            <AboutSection />
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
