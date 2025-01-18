import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
// import Button from "./components/button/Button";

function App() {
  return (
    <Router>
      {/* <Button /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
