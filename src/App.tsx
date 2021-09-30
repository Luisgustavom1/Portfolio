import { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
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
        <main className='mainContainer'>
          <Illustration />
          <AboutMe />
          <Contacts />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
