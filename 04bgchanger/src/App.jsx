import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgcolor, setBgcolor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: bgcolor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setBgcolor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full
text-white shadow-lg cursor-pointer"
            >
              Red
            </button>
            <button
              onClick={() => setBgcolor("Olive")}
              style={{ backgroundColor: "Olive" }}
              className="outline-none px-4 py-1 rounded-full
text-white shadow-lg cursor-pointer"
            >
              Olive
            </button>
            <button
              onClick={() => setBgcolor("Green")}
              style={{ backgroundColor: "Green" }}
              className="outline-none px-4 py-1 rounded-full
text-white shadow-lg cursor-pointer"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
