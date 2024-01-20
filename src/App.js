import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme, sectionThemes } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";
import PageBar from "./components/pageBar/PageBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Loader from "./components/loader/Loader";

import { useRef, useState, useEffect, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { PAGES } from "./services/queries";

const App = () => {
  const { loading, error, data } = useQuery(PAGES);

  const projectsRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();
  const contactRef = useRef();

  const [currentPage, setCurrentPage] = useState("01");
  const [pages, setPages] = useState();

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    dispatch({ type: "CHANGE_THEME", payload: page });
  };

  const getRef = (currentRef) => {
    if (currentRef === "home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (currentRef === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (currentRef === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (currentRef === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        let theme;
        if (action.payload === "01") {
          theme = sectionThemes.sectionOne;
        } else if (action.payload === "02") {
          theme = sectionThemes.sectionTwo;
        } else if (action.payload === "03") {
          theme = sectionThemes.sectionThree;
        } else if (action.payload === "04") {
          theme = sectionThemes.sectionFour;
        }
        return { ...theme };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(sectionReducer, {
    ...sectionThemes.sectionOne,
  });

  useEffect(() => {
    console.log(state);
    const filteredData = () => {
      const pages = [];
      if (data) {
        data.pages.data.forEach((data, index) => {
          pages.push({
            id: data.id,
            title: data.attributes.title,
            subtitle: data.attributes.subtitle,
          });

          if (data.attributes.description) {
            pages[index].description = data.attributes.description;
          }

          if (data.attributes.technologies.data.length > 0) {
            pages[index].technologies = data.attributes.technologies.data;
          }

          if (data.attributes.nextTechnologies.data.length > 0) {
            pages[index].nextTechnologies =
              data.attributes.nextTechnologies.data;
          }
        });
      }

      setPages(pages);
    };

    filteredData();
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <ThemeProvider theme={{ ...theme, state }}>
      <GlobalStyle />
      <Navbar getRef={getRef} />

      <PageBar page={currentPage} />

      <Home
        ref={homeRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="home"
        homeData={pages[0]}
      />

      <About
        ref={aboutRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="about"
        aboutData={pages[1]}
      />

      <Projects
        ref={projectsRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="projects"
        projectsData={pages[2]}
      />

      <Contact
        ref={contactRef}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        data-test-id="contact"
        contactData={pages[3]}
      />
    </ThemeProvider>
  );
};

export default App;
