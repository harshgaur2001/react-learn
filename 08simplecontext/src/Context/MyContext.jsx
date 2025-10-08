import { createContext, useState } from "react";

// Create Context
const MyContext = createContext();

// Create context provider
const MyContextProvider = ({ children }) => {
  const [Mine, setMine] = useState(null);
  return (
    <MyContext.Provider value={{ Mine, setMine }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
export { MyContextProvider };
