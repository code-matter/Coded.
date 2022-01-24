import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/App.scss";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

export default App;
