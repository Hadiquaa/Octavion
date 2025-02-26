import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login1 from './Pages/Login1';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App h-screen w-screen">
      <Routes>
        <Route path="/" element={<Login1/>}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
