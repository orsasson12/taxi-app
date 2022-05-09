import React,{useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import { Accessibility } from 'accessibility/src/main';
function App() {
  useEffect(()=>{
    window.addEventListener('load', function() { new Accessibility(); }, false);
  },[])
  return (
      <Home />
  );
}

export default App;
