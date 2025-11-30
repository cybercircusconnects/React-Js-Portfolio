import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSkeleton from "./components/LoadingSkeleton";
import SEO from "./components/SEO";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Themes";

// Lazy load components for performance
const HeroSection = lazy(() => import("./components/HeroSection"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const LoadingFallback = () => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    }}
  >
    <LoadingSkeleton width="80%" height="400px" />
    <LoadingSkeleton width="60%" height="200px" />
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <SEO />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body>
            <Suspense fallback={<LoadingFallback />}>
              <HeroSection />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </Suspense>
            <ScrollToTop />
            <ToastContainer
              position="bottom-right"
              theme={darkMode ? "dark" : "light"}
            />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
