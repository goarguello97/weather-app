import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background.js";
import Home from "./Pages/Home.js";

function App() {
  return (
    <>
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
