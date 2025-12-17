import "./App.css";
import { MiddleText } from "./components/MiddleText";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex flex-col items-center">
        <MiddleText />
      </div>
    </div>
  );
}

export default App;
