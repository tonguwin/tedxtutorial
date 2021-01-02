import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Todd was here haha. 
        </p> 
        <p className= "annabelle"> Annabelle was here!</p>
        
        <p className="han">no thoughts head empty - Han</p>
        
        <a className="Todd" href="https://todnguyen.com/" target="_blank"
          >Todd was here again. HAHA.</a>

        <p className="Katie">  katie says lets git it
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
