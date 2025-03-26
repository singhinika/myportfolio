import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Design from './pages/Design';
import Photography from './pages/Photography';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/design" element={<Design />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
