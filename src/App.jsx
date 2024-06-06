import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Credits from "./pages/Credits.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/catalogue" element={<Catalogue />} />
        <Route exact path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;