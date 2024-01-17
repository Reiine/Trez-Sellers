import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<> <Home/> </>}/>
        <Route path='/login' element={<> <Login /> </> }/>
        <Route path='/register' element={<> <Register /> </> }/>
        <Route path='/dashboard' element={<> <Dashboard/> </> }/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
