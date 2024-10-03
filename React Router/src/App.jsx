import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection,';

function App() {

  return (
    <>
     <div id="container">
      <Navbar />
      <MainSection />
     </div>
    </>
  )
}

export default App
