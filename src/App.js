import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
