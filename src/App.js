import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <header>
          <Link to="/">
              <h1 className={styles.title}>Projects</h1>
          </Link>
      </header>
      <main>
          <Routes>
              <Route path="projects" element={<LandingPage />} />
              <Route path="projects/:projectId" element={<ProjectDetails />} />
              {/*<Route path="/" element={<Main />} /> */}
          </Routes>
      </main>
  </Router>
  );
}

export default App;
