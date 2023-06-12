import './App.css';
import { useState, useEffect } from 'react'
import WorkSection from './components/WorkSection';
import Hero from './components/Hero';
import LeftSideBar from './components/LeftSideBar';
import LoadPage from './components/LoadPage';
import RightSideBar from './components/RightSideBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Spacer from './components/Spacer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import banner from './images/brecht-corbeel-UGVKz9jSfgQ-unsplash.jpg'


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
            <Spacer />
            <img src={banner} alt="banner" id='banner'/>
            <Spacer />
            <WorkSection />           
            <AboutSection />
            <Contact />
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
