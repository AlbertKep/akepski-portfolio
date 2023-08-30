import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";
import PageBar from "./components/pageBar/PageBar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import { useRef, useState } from "react";

const App = () => {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  const [currentPage, setCurrentPage] = useState("01");

  const updateCurrentPage = (page) => setCurrentPage(page);

  const getRef = (currentRef) => {
    if (currentRef === "home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (currentRef === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (currentRef === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar getRef={getRef} />
      <PageBar page={currentPage} />
      <Home
        ref={homeRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="home"
      />
      <About
        ref={aboutRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="about"
      />
      <Projects
        ref={projectsRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="projects"
      />
    </ThemeProvider>
  );
};

export default App;
