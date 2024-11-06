import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import PannaLabs from "./pages/PannaLabs";
import PannaLabsAssistance from "./pages/PannaLabsAssistance";

function App() {
  return (
    <div style={{padding:'10px'}}>
      <Header />
      <HomePage />
      <PannaLabs />
      <PannaLabsAssistance />
      <Footer />
    </div>
  );
}

export default App;
