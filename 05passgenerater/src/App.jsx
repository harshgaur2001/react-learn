import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowSymbol, setAllowSymbol] = useState(false);

  const passwordRef = useRef(null);

  const passgenerater = useCallback(() => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    // Start with letters
    let characters = letters;

    // Add numbers or symbols if allowed
    if (allowNum) characters += numbers;
    if (allowSymbol) characters += symbols;

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setPassword(password);
  }, [length, allowNum, allowSymbol]);

  useEffect(() => {
    passgenerater();
  }, [length, allowNum, allowSymbol]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center flex-col">
      <h1 className="text-white p-4 text-4xl font-bold text-center">
        Password Generator
      </h1>
      <div className="p-4 max-w-lg flex">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="bg-white rounded-sm pt-1 pb-1 pr-2 pl-2 outline-0 grow"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 duration-200 text-white pt-1 pb-1 pr-2 pl-2 rounded-sm cursor-pointer ml-2 hover:bg-blue-800"
        >
          Copy
        </button>
      </div>
      <div className="p-4 text-white flex flex-wrap items-center gap-2 sm:gap-4 sm:flex-row justify-center">
        <div className="flex items-center gap-2">
          Length:{" "}
          <input
            type="range"
            value={length}
            min="6"
            max="14"
            onChange={(ele) => {
              setLength(Number(ele.target.value));
            }}
            className="cursor-pointer text-white"
          />{" "}
          {length}
        </div>
        <br />
        <div className="flex items-center gap-2">
          Numbers:{" "}
          <input
            type="checkbox"
            value={allowNum}
            onChange={() => {
              setAllowNum((prev) => !prev);
            }}
            className="cursor-pointer text-white h-[16px] w-[16px]"
          />
        </div>
        <br />
        <div className="flex items-center gap-2">
          Symbols:{" "}
          <input
            type="checkbox"
            value={allowSymbol}
            onChange={() => {
              setAllowSymbol((prev) => !prev);
            }}
            className="cursor-pointer text-white h-[16px] w-[16px]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
