import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar />
      <Home />
      <About />
      <Projects />
    </ThemeProvider>
  );
};

export default App;
