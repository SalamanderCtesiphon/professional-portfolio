import './App.css';
import logo from './icons/icons8-merge-git-100.png'

function App() {
  return (
    <div className="App">
      <header>
        <img id='logo' src={logo} alt="my logo" />
        <div className="link-container">
          <div className="link">About</div>
          <div className="link">Experience</div>
          <div className="link">Work</div>
          <div className="link">Contact</div>
          <div className="link">Resume</div>
        </div>
      </header>
      <div className="hero">
        <p className="intro">Hi, my name is</p>
        <h1 className="title">Shannon Brookshire.</h1>
        <h1 className="title2">I am a front-end web developer.</h1>
        <p className="intro-paragraph">I am a enthusiastic software engineer specializing in front-end web development. I have a passion for creating beautiful functional user interfaces. I fully embrace a growth mind-set dedicating myself daily to improving my web development skills. It took a lot of grit and determination to reach this point in my journey and I look forward to overcoming the challenges ahead.</p>
      </div>
    </div>
  );
}

export default App;
