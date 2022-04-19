import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Project from "./components/Projects";
import About from "./components/About";

import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
