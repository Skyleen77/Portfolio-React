import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './views/Home';
import NotFound from './views/NotFound';
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/ScrollTopBehaviour";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/cursor/Cursor";
import Mentions from "./views/Mentions";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">

      <Cursor />

      <ScrollToTop />
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
