import SmoothScrollProvider from "./components/SmoothScrolling.jsx";
import HomeSection from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import AboutSection from "./components/about.jsx";
function App() {
  return (
    <>
      <SmoothScrollProvider>
      <Navbar />
      <HomeSection />
      <AboutSection />
      </SmoothScrollProvider>
    </>
  );
}

export default App;