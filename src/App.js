import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar />
    </ThemeProvider>
  );
};

export default App;
