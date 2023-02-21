import "./App.css";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
