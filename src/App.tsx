import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Illustration from "./components/Illustration";

import { GlobalStyle } from "./styles/globalStyle";
import { dark, light } from "./styles/theme";


function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Header />
        <Illustration />
      </ThemeProvider>
    </>
  );
}

export default App;
