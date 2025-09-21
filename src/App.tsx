import { Routes, Route } from "react-router-dom";

import { Header } from "./header/header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
// import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
