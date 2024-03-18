import './App.css';
import LandingPage from './Pages/LandingPage';
import MapsPage from './Pages/MapsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<LandingPage />} />

          <Route path="/maps" element={<MapsPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
