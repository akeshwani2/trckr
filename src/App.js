import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Content from './Content';
import ProtectedRoute from './ProtectedRoute';
import ForgotPassword from './ForgotPassword';

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
          </div>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard className="dash" />} />
        <Route path="/signup" element={<div className="sign"><Signup /></div>} />
        <Route path="/login" element={<div className='login-container'><Login /></div>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <div><Content /></div>
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>
    </Router>
  );
}
export default App;