import {
  
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainApp from "./Pages/MainApp";

function App() {
  return (
    
      <Routes>
        {/* Redirect to static landing page */}
        <Route path="/" element={<Navigate replace to="/landing-page/" />} />

        {/* React App starts from /app */}
        <Route path="/app/*" element={<MainApp />} />
      </Routes>
    
  );
}

export default App;
