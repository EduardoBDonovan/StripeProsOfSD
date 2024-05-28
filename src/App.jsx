import "./App.css";
import NavbarComp from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
