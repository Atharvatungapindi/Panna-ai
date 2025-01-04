import { createContext, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import PannaLabs from "./pages/PannaLabs";
import PannaLabsAssistance from "./pages/PannaLabsAssistance";
// import Contact from "./components/ContactUs/Contact";

export const AppContext = createContext(null);

function App() {
  const [mainHeight, setMainHeight] = useState(0);
  return (
    <AppContext.Provider value={{ mainHeight, setMainHeight }}>
      <Header />
      <HomePage />
      <PannaLabs />
      <PannaLabsAssistance />
      {/* <Contact /> */}
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
