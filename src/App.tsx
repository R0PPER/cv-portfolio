// App.tsx
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "./PageWrapper";
import { ParticleBackground } from "./ParticleBackground";

import { Header } from "./header/header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { CustomCursor } from "./CustomCursor";
import "./App.css";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/work", component: Work },
  { path: "/contact", component: Contact },
];

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />

      <Header />
      <div className="App">
        <ParticleBackground />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PageWrapper>
                    <Component />
                  </PageWrapper>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
