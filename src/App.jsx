import MainApp from "./components/MainApp";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8001/message")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="w-full">
        <div>
          <MainApp />
        </div>
        <div className="border-t-2 border-t-black bg-gradient-to-b from-teal-200 to-emerald-500 pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
