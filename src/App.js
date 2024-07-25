import React, { useState, createContext } from 'react';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Search from './components/Search';
import RequestProject from './components/RequestProject';

function App() {
  const Context= createContext(null);
  const [closeNavbar, setCloseNavbar]= useState(true);
  const navbarMobileHandle= ()=>{
    if(closeNavbar == false){
    setCloseNavbar(true);
    }
    else{
      setCloseNavbar(false);
    }
  }
  return (
    <Context.Provider value={{
      navbarMobileHandle,
      closeNavbar,
    }}>
      <BrowserRouter>
    <div className="App">
      <Header context={Context}/>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/requestProject' element={<RequestProject />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
