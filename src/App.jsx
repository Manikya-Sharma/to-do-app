import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-[100vh]">
      <div className="">
        <Navbar />
      </div>
      <div className="w-full">
        <div>
          <MainApp />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
