// import MyContextProvider from "./Context/MyContextProvider";

import { MyContextProvider } from "./Context/MyContext";

import Submit from "./Components/Submit";
import Show from "./Components/Show";

function App() {
  return (
    <MyContextProvider>
      <Submit />
      <Show />
    </MyContextProvider>
  );
}

export default App;
