import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

// Заметь внизу Navbar и Footer не сидят внутри Routes так как всегда должны отображаться на сайте и не меняться при хождении по сайту
function App() {
    return (
        <div className="App">
            <Router> 
                <ScrollToTop />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
