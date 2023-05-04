import Kathy from "./components/Kathy";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Background />
      <Kathy />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
