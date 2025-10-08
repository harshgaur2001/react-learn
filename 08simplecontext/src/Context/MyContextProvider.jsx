import { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [Mine, setMine] = useState(null);
  return (
    <MyContext.Provider value={{ Mine, setMine }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
