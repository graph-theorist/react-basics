import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./Contact";

function App() {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
