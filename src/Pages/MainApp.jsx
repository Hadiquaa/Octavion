import { Routes, Route } from "react-router-dom";
import Login1 from "./Login1";
import Dashboard from "./Dashboard";

function MainApp() {
  return (
    <div className="App h-screen w-screen">
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default MainApp;
