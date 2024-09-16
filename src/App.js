import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-title-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='text-lg font-bold'>trckr</h1>
          </div>
          <div className="login-container">
            <Login />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;