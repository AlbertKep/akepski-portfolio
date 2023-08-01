import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";
import PageBar from "./components/pageBar/PageBar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import { useRef, useEffect, useState } from "react";

const App = () => {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("01");
  const componentsRefs = useRef([]);
  const projectsRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  const updateCurrentPage = (page) => setCurrentPage(page);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   treshhold: 1,
  // };
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   }, options);
  //   if (componentsRefs.current) observer.observe(componentsRefs);
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
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
