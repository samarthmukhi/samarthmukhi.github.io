import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import IntroReveal from "./components/IntroReveal";
import { IntroContext } from "./lib/introContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const seen =
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem("introSeen");
  const [done, setDone] = useState(!!seen);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      /* ignore storage failures (private mode) */
    }
    setDone(true);
  }, []);

  return (
    <IntroContext.Provider value={{ done }}>
      <AnimatePresence>
        {!done && <IntroReveal key="intro" onComplete={finish} />}
      </AnimatePresence>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="research" element={<Research />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </IntroContext.Provider>
  );
}

export default App;
