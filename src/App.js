import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const [token , setToken] = useState("");
  const [isLogin , setIsLogin] = useState(false);
  useEffect(()=>{
    const log = Cookies.get('isLogin');
    if(log){
      setIsLogin(log);
      console.log(log);
    }
  })
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<> <Home/> </>}/>
        <Route path='/login' element={<> <Login setToken={setToken} setIsLogin={setIsLogin}  /> </> }/>
        <Route path='/register' element={<> <Register /> </> }/>
        <Route path='/dashboard' element={<> <Dashboard token={token} setToken={setToken} isLogin={isLogin}/> </> }/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
