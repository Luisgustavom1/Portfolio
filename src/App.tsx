import { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/ContactsContainer";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import Projects from "./components/ProjectsContainer";
import Services from "./components/ServicesContainer";
import Skills from "./components/SkillsContainer";

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
          <Projects />
          <Services />
          <Skills />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
