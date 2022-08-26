import { useState, useEffect } from 'react';

import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeCover from './components/HomeCover';

function App() {
  const [vh, setVh] = useState({});

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    setVh({
      "--vh": `${vh}px`
    });
  }, []);

  return (
    <div className="App"> 
      <Header />
      <HomeCover />
      {/*<Sidebar />*/}
      <Content />
    </div>
  );
}

export default App;
