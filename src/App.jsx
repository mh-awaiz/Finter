import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="px-4 bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/thankyou" element={<Thanks/>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
