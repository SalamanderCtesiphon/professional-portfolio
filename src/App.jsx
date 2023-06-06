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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus distinctio accusantium earum laboriosam optio, mollitia voluptatem esse dolore veniam odit amet quae vitae ut alias quisquam eum molestias. Necessitatibus.</p>
    
      </div>
    </div>
  );
}

export default App;
