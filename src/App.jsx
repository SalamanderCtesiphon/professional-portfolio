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


function App() {
  const [loading, setLoading] = useState(false)
  let color= useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
            <WorkSection />  
            <Spacer />         
            <AboutSection />
            <Spacer />
            <Contact />
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
