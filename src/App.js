import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import MainPage from './components/MainPage';
import Sider from './components/Sider';
import Runs from './components/Runs';
import Stats from './components/Stats';
import Bowlers from './components/Bowlers';

function App() {
  return (
    <div className="App">
      <Sider/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage/>}/>
          <Route path="/runs" element={<Runs/>}/>
          <Route path='/stats' element={<Stats/>}/>
          <Route path='/bowlers' element={<Bowlers/>}/>
          <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 