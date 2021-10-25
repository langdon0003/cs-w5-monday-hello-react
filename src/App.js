import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import "./App.css";

function App() {
  if (window.location.pathname === "/jobs") {
    return <Jobs />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    );
  }
}

export default App;
