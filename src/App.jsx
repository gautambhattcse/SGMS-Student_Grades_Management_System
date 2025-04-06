import "./App.css";
import { Button } from "./components/ui/button";
import StudentGradeSystem from "./components/StudentGradeSystem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <StudentGradeSystem />
      <Footer />
    </>
  );
}

export default App;
