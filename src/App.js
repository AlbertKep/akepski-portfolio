import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
