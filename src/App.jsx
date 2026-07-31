import SmoothScrollProvider from "./components/SmoothScrolling.jsx";
import HomeSection from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import AboutSection from "./components/about.jsx";
import ProjectsSection from "./components/Project.jsx";
function App() {
  return (
    <>
      <SmoothScrollProvider>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      </SmoothScrollProvider>
    </>
  );
}

export default App;