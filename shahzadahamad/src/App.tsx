import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMedu from './pages/SideMenu';
import MainContent from './pages/MainContent';

function App() {
  return (
    <div className="flex scroll-smooth">
      <div className=''>
        <SideMedu />
      </div>
      <div className='flex-grow'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
