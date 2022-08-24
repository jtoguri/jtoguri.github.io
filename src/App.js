import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeCover from './components/HomeCover';

function App() {
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
